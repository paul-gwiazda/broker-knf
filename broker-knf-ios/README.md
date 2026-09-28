# Broker KNF 0.1 — PWA na iPhone

To demonstracyjna wersja aplikacji do przygotowania do egzaminu brokerskiego KNF.

## Co działa
- panel postępu,
- quiz 10 pytań,
- demonstracyjny egzamin 15 pytań,
- fiszki,
- zapis błędów,
- statystyki,
- lokalny zapis postępu (localStorage),
- tryb PWA/offline po opublikowaniu przez HTTPS.

## Jak uruchomić na komputerze
Najprościej uruchomić lokalny serwer HTTP w katalogu aplikacji, np.:

    python3 -m http.server 8080

Następnie wejść na http://localhost:8080

## Jak mieć ją na iPhone za 0 zł
PWA wymaga adresu HTTPS. Najprostsze bezpłatne opcje to GitHub Pages, Cloudflare Pages lub Netlify.

### GitHub Pages
1. Załóż bezpłatne konto GitHub, jeśli go nie masz.
2. Utwórz nowe repozytorium, np. `broker-knf`.
3. Wgraj wszystkie pliki z tego folderu do głównego katalogu repozytorium.
4. Wejdź w Settings -> Pages.
5. W sekcji Build and deployment wybierz Deploy from a branch, `main`, katalog `/ (root)`.
6. Otwórz otrzymany adres HTTPS na iPhonie w Safari.
7. Safari -> Udostępnij -> Dodaj do ekranu początkowego -> włącz „Otwórz jako aplikację” -> Dodaj.

## Ważne
Obecna baza pytań jest tylko demonstracyjna. Kolejne wersje powinny zostać zasilone zweryfikowanymi pytaniami KNF i aktualnymi podstawami prawnymi.
