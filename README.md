# Gökay Çetinakdoğan Portfolio Projects

Bu depo portfolyo sitesinin kaynak kodlarını ve yayın aracını birlikte tutar.

## Klasörler

- `website2`: Önceki Next.js portfolyo sürümü.
- `website3`: Güncel portfolyo sürümü.
- `deploy-website.sh`: `website3` statik çıktısını `gokaycetinn/Website` deposuna gönderen yayın betiği.

Bağımlılıklar, yerel derleme çıktıları ve geçici `website-deploy` klasörü kaynak deposuna eklenmez.

## Yerel geliştirme

```bash
cd website3
npm install
npm run dev
```

## Yayınlama

Proje kökünde aşağıdaki komut çalıştırılır:

```bash
./deploy-website.sh
```

Betik `website3` için statik üretim derlemesi alır ve yalnızca oluşan çıktıyı `https://github.com/gokaycetinn/Website` deposuna gönderir.
