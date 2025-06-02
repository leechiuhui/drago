# GitHub Actions Workflows

這個專案包含了三個 GitHub Actions workflows：

## 1. CI (Continuous Integration) - `ci.yml`

**觸發條件：**
- 任何分支的推送
- 任何分支的 Pull Request

**功能：**
- 在多個 Node.js 版本 (16, 18, 20) 上測試專案
- 檢查程式碼風格 (lint)
- 執行建置並驗證結果

**用途：** 確保程式碼品質和跨版本相容性

## 2. GitHub Pages 部署 (官方方式) - `deploy.yml`

**觸發條件：**
- 推送到 main 分支
- Pull Request 到 main 分支
- 手動觸發

**功能：**
- 建置專案
- 使用 GitHub Pages 官方 Actions 進行部署
- 支援 GitHub Pages 的新部署方式

**用途：** 使用 GitHub 官方推薦的方式部署到 GitHub Pages

## 3. gh-pages 部署 - `gh-pages.yml`

**觸發條件：**
- 推送到 main 分支
- 手動觸發

**功能：**
- 建置專案
- 使用專案現有的 `gh-pages` 套件進行部署
- 與現有的部署腳本相容

**用途：** 使用專案已配置的 gh-pages 套件自動部署

## 建議使用

根據您的需求選擇使用：

- **開發階段：** 所有 workflows 都會運行，CI 確保程式碼品質
- **生產部署：** 建議使用 `gh-pages.yml`，因為它與您現有的設定最相容
- **未來遷移：** 如果想使用 GitHub 官方的部署方式，可以使用 `deploy.yml`

## 設定注意事項

1. 確保 GitHub repository 的 Pages 設定正確
2. 如果使用 `deploy.yml`，需要在 repository 設定中啟用 Pages 的 GitHub Actions 來源
3. 如果使用 `gh-pages.yml`，請確保 Pages 來源設定為 `gh-pages` 分支

## 停用不需要的 workflow

如果某個 workflow 不需要，可以：
1. 刪除對應的 `.yml` 檔案，或
2. 在檔案開頭加上註解來暫時停用 