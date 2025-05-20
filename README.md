# 🎥 Video-Preview-App-Youtube-like
A responsive React + Laravel project that mimics YouTube-style video previews with hover-to-play, sound control, and search functionality.


## 📦 Project Structure
/frontend -> React + TypeScript video preview UI  
/backend -> Laravel reads video data from `db.json` (seeded into the database), built with Eloquent ORM for performance and maintainability.

## 🚀 Features
- Hover to preview video playback after 0.5 seconds
- Sound toggle on hover
- Responsive UI with Tailwind CSS
- Search bar filters by title or description (≥ 3 characters)
- Static vs interactive preview mode support
- Backend filters and returns video JSON

## Clone the repo
git clone https://github.com/Frekeasuquo/Video-Preview-App-YouTube-like-.git

## 🖥️ Frontend Setup (React)
cd frontend  
npm install  
npm start # or npm run dev

## 🔧 Backend Setup (Laravel)
cd backend  
composer install  
cp .env.example .env  
php artisan key:generate  

Add your db.json in: storage/app/db.json

php artisan serve

## 🔗 API Endpoints
| Method | Endpoint           | Description                            |
| ------ | ------------------ | -------------------------------------- |
| GET    | /api/videos        | Returns all video data                 |
| GET    | /api/search?query= | Filters videos by title or description |


## 📸 Demo Preview
https://github.com/user-attachments/assets/3ea63024-3a6f-41b0-9c43-ce923081d30a


## 🧪 Tech Stack
- React 18 + TypeScript
- Tailwind CSS
- Laravel 10 (PHP 8.1+)
- Eloquent ORM
