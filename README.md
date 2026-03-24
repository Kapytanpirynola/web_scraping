# 🕸️ Job Market Analyzer (Web Scraping + Dashboard)

A fullstack project that scrapes job listings from the web, analyzes trends in the job market, and visualizes insights through an interactive dashboard.

---

## 🚀 Features

* 🔍 Web scraping of job listings
* 📊 Data analysis (locations, companies, trends)
* 💾 Data storage in JSON format
* 🌐 REST API for accessing job data
* 📈 Interactive dashboard (planned)

---

## 🛠️ Tech Stack

**Backend:**

* Node.js
* Axios
* Cheerio

**Optional / Advanced:**

* Puppeteer (for dynamic websites)
* Express (API)
* React (Frontend dashboard)

---

## 📁 Project Structure

```
job-scraper-js/
│
├── scraper/
│   └── scraper.js
│
├── data/
│   └── data.json
│
├── api/              # (future)
├── client/           # (future frontend)
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/job-scraper-js.git
cd job-scraper-js
```

2. Install dependencies:

```bash
npm install
```

---

## ▶️ Usage

Run the scraper:

```bash
node scraper/scraper.js
```

This will:

* Fetch job listings from the target website
* Extract relevant data (title, company, location)
* Save results into a JSON file inside `/data`

---

## 📊 Example Output

```json
[
  {
    "title": "Python Developer",
    "company": "ABC Corp",
    "location": "New York, NY"
  }
]
```

---

## 🧠 Future Improvements

* [ ] Add salary extraction
* [ ] Filter by keywords (e.g., "Python", "React")
* [ ] Store data in a database (MongoDB / PostgreSQL)
* [ ] Build REST API with Express
* [ ] Create interactive dashboard
* [ ] Automate scraping with cron jobs
* [ ] Deploy project online

---

## ⚠️ Disclaimer

This project is for educational purposes only.

Please respect the website’s terms of service and `robots.txt` when scraping data.

---

## 💼 Resume Description

**Job Market Analyzer**
Developed a web scraping system using Node.js, Axios, and Cheerio to collect and analyze job market data. Designed for future expansion into a fullstack application with API and interactive dashboard.

---

## 📌 Author

Adrián
