const extractBtn = document.getElementById("extractBtn");
const resultDiv = document.getElementById("result");
const videoUrlInput = document.getElementById("videoUrl");

extractBtn.addEventListener("click", async () => {
  const url = videoUrlInput.value.trim();
  if (!url) return alert("Please enter a YouTube URL");

  const urlObj = new URL(url);
  let videoId = urlObj.searchParams.get("v");
  if (!videoId) {
    videoId = urlObj.pathname.slice(1);
  }

  resultDiv.innerHTML = `<p class="text-gray-500">Loading transcript...</p>`;

  try {
    const transcriptRes = await fetch(
      `http://localhost:3000/youtube-transcript?videoId=${videoId}`
    );
    const transcriptData = await transcriptRes.json();

    let transcriptText = "";
    if (transcriptData.error) {
      transcriptText = "Transcript not available.";
    } else {
      transcriptText = transcriptData.content || "Transcript not available.";
    }

    resultDiv.innerHTML = `
          <iframe class="w-full h-64 mb-4" src="https://www.youtube.com/embed/${videoId}" 
            frameborder="0" allowfullscreen></iframe>
          <h3 class="text-lg font-semibold mb-2">Transcript:</h3>
          <p class="text-gray-800 whitespace-pre-wrap">${transcriptText}</p>
        `;
  } catch (err) {
    resultDiv.innerHTML = `<p class="text-red-500 font-semibold">Error: ${err.message}</p>`;
  }
});
