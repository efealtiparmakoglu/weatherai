# Katkıda Bulunma Rehberi

## Geliştirme Ortamı Kurulumu

1. Repoyu fork edin
2. `git clone https://github.com/YOUR_USERNAME/${project_name}.git`
3. `cd ${project_name}`
4. `npm install`
5. `cp .env.example .env` ve değişkenleri ayarlayın

## Branch Stratejisi

- `main` - Production kodu
- `develop` - Geliştirme branch'i
- `feature/*` - Yeni özellikler
- `bugfix/*` - Hata düzeltmeleri
- `hotfix/*` - Acil düzeltmeler

## Commit Mesajları

```
feat: Yeni özellik ekleme
fix: Hata düzeltme
docs: Dokümantasyon güncelleme
style: Kod formatı değişikliği
refactor: Kod refactor etme
test: Test ekleme/güncelleme
chore: Yapılandırma değişikliği
```

## Pull Request Süreci

1. Branch'inizi güncel tutun: `git pull origin main`
2. Değişikliklerinizi commit edin
3. Push yapın: `git push origin feature/your-feature`
4. GitHub'dan PR açın
5. Code review bekleyin
6. Merge edildiğinde branch'inizi silin
