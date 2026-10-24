import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import QRCode from 'qrcode'
import jsQR from 'jsqr'
import { PNG } from 'pngjs'

const outputDirectory = join(process.cwd(), 'qr-codes')
const destinations = [
  {
    slug: 'mercier-maple',
    name: 'Mercier Maple Hardwood',
    url: 'https://vahidhazrati.github.io/first-choice-flooring-demo/#/products/mercier-maple',
  },
  {
    slug: 'shaw-pet-perfect-plus',
    name: 'Shaw Pet Perfect Plus',
    url: 'https://vahidhazrati.github.io/first-choice-flooring-demo/#/products/shaw-pet-perfect-plus',
  },
]
const options = {
  errorCorrectionLevel: 'M',
  margin: 4,
  width: 720,
  color: { dark: '#000000', light: '#ffffff' },
}

await mkdir(outputDirectory, { recursive: true })

for (const destination of destinations) {
  const pngPath = join(outputDirectory, `${destination.slug}.png`)
  const svgPath = join(outputDirectory, `${destination.slug}.svg`)
  await QRCode.toFile(pngPath, destination.url, options)
  await writeFile(svgPath, await QRCode.toString(destination.url, { ...options, type: 'svg' }), 'utf8')

  const png = PNG.sync.read(await (await import('node:fs/promises')).readFile(pngPath))
  const decoded = jsQR(new Uint8ClampedArray(png.data), png.width, png.height)
  if (!decoded || decoded.data !== destination.url) {
    throw new Error(`QR verification failed for ${destination.name}`)
  }
  console.log(`Verified ${destination.name}: ${decoded.data}`)
}

const cards = destinations.map((destination) => `
      <article class="code-card">
        <h2>${destination.name}</h2>
        <img src="./${destination.slug}.svg" alt="QR code linking to ${destination.name}" width="280" height="280">
        <p class="url">${destination.url}</p>
      </article>`).join('')

const printableSheet = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>First Choice Flooring | Product QR Codes</title>
  <style>
    :root { color: #222; font: 16px/1.5 Arial, sans-serif; }
    body { max-width: 900px; margin: 32px auto; padding: 0 24px; }
    h1 { margin-bottom: 8px; font-size: 28px; }
    .intro { margin-top: 0; color: #555; }
    .codes { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; margin-top: 30px; }
    .code-card { break-inside: avoid; text-align: center; }
    .code-card h2 { font-size: 20px; }
    .code-card img { display: block; width: min(100%, 280px); height: auto; margin: auto; }
    .url { overflow-wrap: anywhere; font-size: 11px; }
    @media (max-width: 600px) { .codes { grid-template-columns: 1fr; } }
    @media print { body { margin: 0; max-width: none; } .codes { gap: 18px; } .code-card img { width: 240px; } }
  </style>
</head>
<body>
  <h1>First Choice Flooring</h1>
  <p class="intro">Digital sample room · Product QR codes</p>
  <main class="codes">${cards}
  </main>
</body>
</html>
`

await writeFile(join(outputDirectory, 'print-sheet.html'), printableSheet, 'utf8')
