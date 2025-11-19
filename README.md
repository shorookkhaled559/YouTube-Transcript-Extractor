
# YouTube Transcript Extractor

This project is a **simple and fast YouTube Transcript Extractor** that allows users to paste any YouTube URL and instantly view the **video transcript** (if available).  
It is built with **HTML, Tailwind CSS, and JavaScript**, and uses a **custom Node.js proxy server** to securely access the Supadata YouTube Transcript API.

---

## Live Demo  

You can try the live version here:  
[Live Demo](https://shorookkhaled559.github.io/Diagram-Builder/)  

---

## Features

- **Transcript Extraction** — Fetch full YouTube video transcripts instantly.  
- **Video Preview** — Displays the embedded YouTube video on the page.  
- **Smart URL Support** — Works with both standard YouTube URLs and shortened youtu.be links.  
- **Clean UI** — Simple, modern interface using Tailwind CSS.  
- **Error Handling** — Displays clear messages when transcripts are unavailable.

---

## Technologies Used

- **HTML5** — Web page structure  
- **Tailwind CSS** — Styling and responsive design  
- **JavaScript (ES6)** — Fetch requests, parsing, UI logic  
- **Node.js + Express** — Backend proxy server  
- **Supadata API** — Provides YouTube transcript data  

---

## Why a Proxy Server?

Supadata API requires an **API Key**, and exposing it directly in frontend JavaScript is unsafe.

To solve this, the project uses a **proxy server (Node.js + Express)**:

- The frontend sends the YouTube URL to your server  
- The server sends the request to Supadata API securely  
- The API key remains hidden on the backend  
- The server returns the transcript safely to the frontend  

This protects your API Key from being exposed or stolen.

---

## Backend (Proxy Server)

The backend provides an endpoint to fetch transcripts:

```
/youtube-transcript?url=YOUR_YOUTUBE_URL
```

It communicates with the Supadata API:

```
https://api.supadata.ai/v1/youtube/transcript
```

Example server request:

```js
fetch(`https://api.supadata.ai/v1/youtube/transcript?url=${url}&text=true`, {
  method: "GET",
  headers: {
    "x-api-key": "YOUR_API_KEY"
  }
});
```

---

## Project Structure

```
YouTube-Transcript-Extractor/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

---

## How It Works

1. User pastes a YouTube URL.  
2. Frontend extracts the video ID and sends it to the proxy server:  
   `/youtube-transcript?url=THE_URL`  
3. Server sends request to Supadata API.  
4. Supadata returns the transcript.  
5. Frontend displays transcript with video preview.  
6. If transcript is unavailable, a message appears.

---

## Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/YouTube-Transcript-Extractor.git
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Run the server
```bash
node server.js
```

### 4. Open the frontend
Open `index.html` in your browser.

---

## Future Enhancements

- Download transcript as **TXT** or **PDF**  
- Add **dark mode** toggle  
- Transcript with timestamps  
- Copy transcript button  
- Multi-language transcript support  

---

## License

This project is **open-source**, free for personal and educational use.  
Developed by **Shorouk Khaled**.
