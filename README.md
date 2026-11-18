# RX ARCHIVE — 機動戰士鋼彈網頁檔案館

使用純 **HTML5 + CSS3 + 原生 JavaScript (ES Module)** 製作的機動戰士鋼彈技術檔案網頁，已配置相對路徑，可直接上傳至 GitHub 並透過 **GitHub Pages** 部署。

## 專案結構

- `index.html` — 網頁語意化結構與導覽架構
- `src/styles.css` — 設計系統、響應式排版與色彩變數
- `src/app.js` — 機體篩選、規格對比實驗室、動力系統切換、編年史與檔案彈窗互動邏輯
- `src/assets/images/` — 網頁使用的機體與格納庫圖片資產
- `.nojekyll` — 確保 GitHub Pages 直接提供靜態資源服務

## 如何部署到 GitHub Pages

### 方法一：直接靜態部署（免編譯，純 HTML/CSS/JS）

1. 在 GitHub 建立一個新的 Repository（例如 `gundam-archive`）。
2. 將本專案檔案上傳（Push）至 `main` 分支：
   ```bash
   git init
   git add .
   git commit -m "Initial Gundam webpage"
   git branch -M main
   git remote add origin https://github.com/<你的帳號>/<你的倉庫名稱>.git
   git push -u origin main
   ```
3. 前往 GitHub Repository 的 **Settings → Pages**。
4. 在 **Build and deployment → Source** 選擇 **Deploy from a branch**。
5. 分支選擇 **`main`**、資料夾選擇 **`/ (root)`**，點擊 **Save**。
6. 等待約 1–2 分鐘，即可透過 `https://<你的帳號>.github.io/<你的倉庫名稱>/` 瀏覽你的鋼彈網頁。

### 方法二：使用 Vite 建置（可選）

若本機有安裝 Node.js，也可執行：

```bash
npm install
npm run build
```

建置完成的純靜態檔案會輸出至 `dist/` 資料夾。
