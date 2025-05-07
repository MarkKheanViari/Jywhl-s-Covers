const coversData = [
  {
    id: 1,
    title: "Kisame",
    artist: "Rhodessa",
    image: "kisame.jpg",
    date: "Feb 10, 2023",
    genre: "Acoustic",
    description: "Gustong Gusto kitaa ahh~ HAHHAHAA",
    originalSong: "Kisame",
    originalArtist: "Rhodessa",
    videoUrl: "https://example.com/video",
    audioUrl: "audio/1.m4a",
    lyrics: `Verse 1:
    Gustong Tumingin *Giggle
    Sa iyong mga mata
    Na nag niningning
    Kahit na san ka pa
    Pero bakit pag. - tama na`,
  },
  {
    id: 2,
    title: "Tenerife",
    artist: "Ed Sheeran",
    image: "tenerife.jpg",
    date: "2024",
    genre: "Pop",
    description: "You look so wonderful in your dress! HAHA",
    originalSong: "Tenerife",
    originalArtist: "Ed Sheeran",
    videoUrl: "https://example.com/video",
    audioUrl: "audio/2.m4a",
    lyrics: `Verse 1:
    You look so wonderful in your dress
    I love your hair like that
    The way it falls on the side of your neck
    Down your shoulders and back
    We are surrounded by all of these lies
    And people that talk too much`,
  },
  {
    id: 3,
    title: "Sining",
    artist: "Dionela",
    image: "Sining.jpeg",
    date: "2024",
    genre: "Diko alam😭",
    description: "Ikaw ay sining sa museo boooooi!",
    originalSong: "Sining",
    originalArtist: "Dionela",
    videoUrl: "https://example.com/video",
    audioUrl: "audio/3.m4a",
    lyrics: `Verse 1:
    A flower is not a flower until they bloom
    Like my first time living the life the day i met you
    Hate to think that humans have to die someday
    A thousand years won't do ooh~
    
    No wonder I fell in love
    Even though I'm scared to love (ah)
    Baby i know the pain is unbearable 
    There's no way
    
    Pinsala'y ikinamada
    Oh binibining may salamangka
    You've turned my limbics into a bouquet
  
    Ikaw ay tila sining sa museong 'di naluluma~
    Binibini kong ginto hanggang kaluluwa~`,
  },
  {
    id: 4,
    title: "Through the Years",
    artist: "Kenny Rogers",
    image: "TTY.jpg",
    date: "1981",
    genre: "angelic",
    description: "Love song ng mother and father",
    originalSong: "Through the Years",
    originalArtist: "Kenny Rogers",
    videoUrl: "https://example.com/video",
    audioUrl: "audio/4.m4a",
    lyrics: `Verse 1:
    I can't remember when you weren't there 
    When I didn't care for anyone but you 
    And I swear, we've been through everything there is
    Can't imagine anything we've missed
    Can't imagine anything the two of us can't do
    
    Through the years, you've never let me down
    You turned my life around, the sweetest days I've found
    I've found with you through the years
    I've never been afraid, I've loved the life we've made
    And I'm so glad I've stayed right here with you
    Through the years`,
  },
  {
    id: 5,
    title: "Nang tahimik",
    artist: "geiko",
    image: "nang.png",
    date: "2025",
    genre: "angelic",
    description: "Mamahalin ka nya ng tahimik",
    originalSong: "Nang tahimik",
    originalArtist: "geiko",
    videoUrl: "https://example.com/video",
    audioUrl: "audio/5.m4a",
    lyrics: `Verse 1:
      Mamahalin na lang kita nang tahimik
      Idadaan na lang sa mga awitin
      Lagi kang sinasali sa mga panalangin
      Miss na kita iyon ang aking aaminin`,
  },
  {
    id: 6,
    title: "We are young",
    artist: "Fun",
    image: "young.png",
    date: "2012",
    genre: "Diko alam",
    description: "We are young",
    originalSong: "We are young",
    originalArtist: "Fun",
    videoUrl: "https://example.com/video",
    audioUrl: "audio/6.m4a",
    lyrics: `Verse 1:
      Give me a second, I
      I need to get my story straight
      My friends are in the bathroom getting higher than the Empire State
      My lover, she's waiting for me just across the bar
      My seat's been taken by some sunglasses asking 'bout her scar and
  
      I know I gave it to you months ago
      I know you're trying to forget
      But between the drinks and subtle things
      The holes in my apologies
  
      You know I'm trying hard to take it back
      So if by the time the bar closes
      And you feel like falling down
      I'll carry you home
  
      Tonight`,
  },
  {
    id: 7,
    title: "Slim Pickins",
    artist: "Sabrina Carpenter",
    image: "pickins.png",
    date: "2024",
    genre: "Country",
    description: "Slim Pickins",
    originalSong: "Slim Pickins",
    originalArtist: "Sabrina Carpenter",
    videoUrl: "https://example.com/video",
    audioUrl: "audio/7.m4a",
    lyrics: `Verse 1:
      Give me a second, I
      I need to get my story straight
      My friends are in the bathroom getting higher than the Empire State
      My lover, she's waiting for me just across the bar
      My seat's been taken by some sunglasses asking 'bout her scar and
  
      I know I gave it to you months ago
      I know you're trying to forget
      But between the drinks and subtle things
      The holes in my apologies
  
      You know I'm trying hard to take it back
      So if by the time the bar closes
      And you feel like falling down
      I'll carry you home
  
      Tonight`,
  },
]

// Function to initialize audio player for index.html
function initializeIndexAudioPlayer() {
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play-btn");
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");
  const progressSlider = document.getElementById("progress-slider");
  const currentTimeDisplay = document.getElementById("current-time");
  const durationDisplay = document.getElementById("duration");
  const muteBtn = document.getElementById("mute-btn");
  const volumeIcon = document.getElementById("volume-icon");
  const muteIcon = document.getElementById("mute-icon");
  const volumeSlider = document.getElementById("volume-slider");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (
    audio &&
    playBtn &&
    playIcon &&
    pauseIcon &&
    progressSlider &&
    currentTimeDisplay &&
    durationDisplay &&
    muteBtn &&
    volumeIcon &&
    muteIcon &&
    volumeSlider &&
    prevBtn &&
    nextBtn
  ) {
    // console.log("Initializing audio player for index.html");
    const player = setupAudioPlayer(
      audio,
      playBtn,
      playIcon,
      pauseIcon,
      progressSlider,
      currentTimeDisplay,
      durationDisplay,
      muteBtn,
      volumeIcon,
      muteIcon,
      volumeSlider,
      prevBtn,
      nextBtn
    );

    // Play All functionality
    const playAllBtn = document.getElementById("play-all-btn");
    if (playAllBtn) {
      ["touchstart", "click"].forEach((eventType) => {
        playAllBtn.addEventListener(
          eventType,
          (e) => {
            e.preventDefault();
            e.stopPropagation();
            // console.log("Play All button clicked");
            playAllBtn.classList.add("clicked");
            setTimeout(() => {
              playAllBtn.classList.remove("clicked");
            }, 300);
            player.setCurrentTrackIndex(0);
            player.loadTrack(0);
          },
          { passive: falseREW }
        );
      });
    }

    // Individual cover play buttons
    const playCoverButtons = document.querySelectorAll(".play-cover-btn");
    // console.log(`Found ${playCoverButtons.length} play-cover-btn elements`);
    playCoverButtons.forEach((button, index) => {
      ["touchstart", "click"].forEach((eventType) => {
        button.addEventListener(
          eventType,
          (e) => {
            e.preventDefault();
            e.stopPropagation();
            // console.log(`Play button ${index} clicked`);
            button.classList.add("clicked");
            setTimeout(() => {
              button.classList.remove("clicked");
            }, 300);
            player.setCurrentTrackIndex(index);
            player.loadTrack(index);
          },
          { passive: false }
        );
      });
    });
  } else {
    // console.warn("Some audio player elements missing, retrying...");
    setTimeout(initializeIndexAudioPlayer, 100); // Retry after 100ms
  }
}

// Main initialization function
function initializeApp() {
  // Set current year in footer
  const currentYearElements = document.querySelectorAll("#current-year");
  const currentYear = new Date().getFullYear();
  currentYearElements.forEach((element) => {
    element.textContent = currentYear;
  });

  // Add music note decorations
  addMusicNoteDecorations();

  // Fix navigation links
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  navLinks.forEach((link) => {
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);
    newLink.addEventListener("click", function (e) {
      if (this.classList.contains("mobile-nav-link") && this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          document.getElementById("mobile-menu").classList.remove("active");
          const spans = document.getElementById("mobile-menu-btn").querySelectorAll("span");
          spans[0].style.transform = "none";
          spans[1].style.opacity = "1";
          spans[2].style.transform = "none";
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    ["touchstart", "click"].forEach((eventType) => {
      mobileMenuBtn.addEventListener(
        eventType,
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          mobileMenu.classList.toggle("active");
          const spans = mobileMenuBtn.querySelectorAll("span");
          if (mobileMenu.classList.contains("active")) {
            spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
          } else {
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
          }
        },
        { passive: false }
      );
    });

    ["touchstart", "click"].forEach((eventType) => {
      document.addEventListener(
        eventType,
        (e) => {
          if (
            mobileMenu.classList.contains("active") &&
            !mobileMenu.contains(e.target) &&
            e.target !== mobileMenuBtn &&
            !mobileMenuBtn.contains(e.target)
          ) {
            mobileMenu.classList.remove("active");
            const spans = mobileMenuBtn.querySelectorAll("span");
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
          }
        },
        { passive: true }
      );
    });

    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      ["touchstart", "click"].forEach((eventType) => {
        link.addEventListener(
          eventType,
          () => {
            setTimeout(() => {
              mobileMenu.classList.remove("active");
              const spans = mobileMenuBtn.querySelectorAll("span");
              spans[0].style.transform = "none";
              spans[1].style.opacity = "1";
              spans[2].style.transform = "none";
            }, 300);
          },
          { passive: true }
        );
      });
    });
  }

  // Parallax effect
  window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) {
      const parallaxBgs = document.querySelectorAll(".parallax-bg");
      parallaxBgs.forEach((bg) => {
        const scrollPosition = window.pageYOffset;
        const parentOffset = bg.parentElement.offsetTop;
        const distance = (scrollPosition - parentOffset) * 0.5;
        if (
          scrollPosition > parentOffset - window.innerHeight &&
          scrollPosition < parentOffset + bg.parentElement.offsetHeight
        ) {
          bg.style.transform = `translateY(${distance}px)`;
        }
      });
    }

    const fadeElements = document.querySelectorAll(".cover-card, .featured-content, .about-content");
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight * 0.85) {
        element.classList.add("fade-in");
      }
    });
  });

  // Page-specific initialization
  const pathname = window.location.pathname.toLowerCase();
  if (
    pathname === "/" ||
    pathname.includes("index.html") ||
    pathname === "" ||
    pathname === "/index.html/"
  ) {
    initializeIndexAudioPlayer();
  } else if (pathname.includes("cover-detail.html")) {
    const audio = document.getElementById("cover-audio");
    const playBtn = document.getElementById("play-btn");
    const playIcon = document.getElementById("play-icon");
    const pauseIcon = document.getElementById("pause-icon");
    const progressSlider = document.getElementById("progress-slider");
    const currentTimeDisplay = document.getElementById("current-time");
    const durationDisplay = document.getElementById("duration");
    const muteBtn = document.getElementById("mute-btn");
    const volumeIcon = document.getElementById("volume-icon");
    const muteIcon = document.getElementById("mute-icon");
    const volumeSlider = document.getElementById("volume-slider");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (
      audio &&
      playBtn &&
      playIcon &&
      pauseIcon &&
      progressSlider &&
      currentTimeDisplay &&
      durationDisplay &&
      muteBtn &&
      volumeIcon &&
      muteIcon &&
      volumeSlider &&
      prevBtn &&
      nextBtn
    ) {
      const urlParams = new URLSearchParams(window.location.search);
      const coverId = Number.parseInt(urlParams.get("id"));
      const coverIndex = coversData.findIndex((cover) => cover.id === coverId);
      const player = setupAudioPlayer(
        audio,
        playBtn,
        playIcon,
        pauseIcon,
        progressSlider,
        currentTimeDisplay,
        durationDisplay,
        muteBtn,
        volumeIcon,
        muteIcon,
        volumeSlider,
        prevBtn,
        nextBtn
      );
      player.setCurrentTrackIndex(coverIndex);
      player.loadTrack(coverIndex);
      if (coverId) {
        displayCoverDetails(coverId);
      }
    }
  } else if (pathname.includes("all-covers.html")) {
    displayAllCovers();
    setupFilters();
    animateCoverCards();
  }

  // Initial animations
  setTimeout(() => {
    document.querySelectorAll(".cover-card, .featured-content, .about-content").forEach((el) => {
      el.classList.add("fade-in");
    });
  }, 300);
}

// Run initialization when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

// Audio player setup
function setupAudioPlayer(
  audioElement,
  playBtn,
  playIcon,
  pauseIcon,
  progressSlider,
  currentTimeDisplay,
  durationDisplay,
  muteBtn,
  volumeIcon,
  muteIcon,
  volumeSlider,
  prevBtn,
  nextBtn
) {
  let currentTrackIndex = 0;

  // Format time
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  audioElement.addEventListener("timeupdate", () => {
    const currentTime = audioElement.currentTime;
    const duration = audioElement.duration || 0;
    const progressPercent = (currentTime / duration) * 100;
    progressSlider.value = progressPercent || 0;
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
    const gradient = `linear-gradient(to right, var(--primary-dark) 0%, var(--primary-dark) ${progressPercent}%, var(--border-color) ${progressPercent}%, var(--border-color) 100%)`;
    progressSlider.style.background = gradient;
  });

  audioElement.addEventListener("loadedmetadata", () => {
    durationDisplay.textContent = formatTime(audioElement.duration);
  });

  ["touchstart", "click"].forEach((eventType) => {
    playBtn.addEventListener(
      eventType,
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (audioElement.paused) {
          const playPromise = audioElement.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                playIcon.classList.add("hidden");
                pauseIcon.classList.remove("hidden");
                playBtn.classList.add("playing");
              })
              .catch((error) => {
                console.log("Playback was prevented:", error);
              });
          }
        } else {
          audioElement.pause();
          playIcon.classList.remove("hidden");
          pauseIcon.classList.add("hidden");
          playBtn.classList.remove("playing");
        }
      },
      { passive: false }
    );
  });

  ["input", "change", "touchmove"].forEach((eventType) => {
    progressSlider.addEventListener(eventType, () => {
      const seekTime = (progressSlider.value / 100) * (audioElement.duration || 0);
      if (!isNaN(seekTime)) {
        audioElement.currentTime = seekTime;
      }
      const gradient = `linear-gradient(to right, var(--primary-dark) 0%, var(--primary-dark) ${progressSlider.value}%, var(--border-color) ${progressSlider.value}%, var(--border-color) 100%)`;
      progressSlider.style.background = gradient;
    });
  });

  ["touchstart", "click"].forEach((eventType) => {
    muteBtn.addEventListener(
      eventType,
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        audioElement.muted = !audioElement.muted;
        volumeIcon.classList.toggle("hidden");
        muteIcon.classList.toggle("hidden");
        volumeSlider.value = audioElement.muted ? 0 : audioElement.volume;
        updateVolumeSliderColor(volumeSlider);
        muteBtn.classList.add("clicked");
        setTimeout(() => {
          muteBtn.classList.remove("clicked");
        }, 300);
      },
      { passive: false }
    );
  });

  ["input", "change", "touchmove"].forEach((eventType) => {
    volumeSlider.addEventListener(eventType, () => {
      audioElement.volume = volumeSlider.value;
      audioElement.muted = audioElement.volume === 0;
      volumeIcon.classList.toggle("hidden", audioElement.muted);
      muteIcon.classList.toggle("hidden", !audioElement.muted);
      updateVolumeSliderColor(volumeSlider);
    });
  });

  function updateVolumeSliderColor(slider) {
    const value = slider.value * 100;
    const gradient = `linear-gradient(to right, var(--primary-dark) 0%, var(--primary-dark) ${value}%, var(--border-color) ${value}%, var(--border-color) 100%)`;
    slider.style.background = gradient;
  }

  updateVolumeSliderColor(volumeSlider);

  function loadTrack(index) {
    const audioPlayer = audioElement.closest(".audio-player");
    if (audioPlayer) {
      audioPlayer.classList.add("loading");
      setTimeout(() => {
        audioPlayer.classList.remove("loading");
      }, 500);
    }
    audioElement.src = coversData[index].audioUrl;
    audioElement.load();
    const playPromise = audioElement.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          playIcon.classList.add("hidden");
          pauseIcon.classList.remove("hidden");
          playBtn.classList.add("playing");
        })
        .catch((error) => {
          console.log("Playback was prevented:", error);
          playIcon.classList.remove("hidden");
          pauseIcon.classList.add("hidden");
          playBtn.classList.remove("playing");
        });
    }
  }

  ["touchstart", "click"].forEach((eventType) => {
    nextBtn.addEventListener(
      eventType,
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        nextBtn.classList.add("clicked");
        setTimeout(() => {
          nextBtn.classList.remove("clicked");
        }, 300);
        currentTrackIndex = (currentTrackIndex + 1) % coversData.length;
        loadTrack(currentTrackIndex);
        updateCoverDetails(currentTrackIndex);
      },
      { passive: false }
    );

    prevBtn.addEventListener(
      eventType,
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        prevBtn.classList.add("clicked");
        setTimeout(() => {
          prevBtn.classList.remove("clicked");
        }, 300);
        currentTrackIndex = (currentTrackIndex - 1 + coversData.length) % coversData.length;
        loadTrack(currentTrackIndex);
        updateCoverDetails(currentTrackIndex);
      },
      { passive: false }
    );
  });

  audioElement.addEventListener("ended", () => {
    currentTrackIndex = (currentTrackIndex + 1) % coversData.length;
    loadTrack(currentTrackIndex);
    updateCoverDetails(currentTrackIndex);
  });

  return {
    loadTrack,
    setCurrentTrackIndex: (index) => {
      currentTrackIndex = index;
    },
  };
}

// Music note decorations
function addMusicNoteDecorations() {
  const musicNotes = ["♪", "♫", "♬", "♩", "♭", "♮"];
  const container = document.createElement("div");
  container.className = "music-notes-decoration";
  container.style.cssText =
    "position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; overflow: hidden;";
  const noteCount = window.innerWidth < 768 ? 10 : 20;
  for (let i = 0; i < noteCount; i++) {
    const note = document.createElement("span");
    const randomNote = musicNotes[Math.floor(Math.random() * musicNotes.length)];
    note.textContent = randomNote;
    note.style.cssText = `
      position: absolute;
      color: var(--primary-dark);
      opacity: ${Math.random() * 0.2 + 0.1};
      font-size: ${Math.random() * 2 + 1}rem;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    container.appendChild(note);
  }
  document.body.appendChild(container);
}

// Display cover details
function displayCoverDetails(coverId) {
  const cover = coversData.find((cover) => cover.id === coverId);
  if (!cover) return;
  document.title = `${cover.title} by ${cover.artist} - JYWHL Collections`;
  const coverTitle = document.getElementById("cover-title");
  const coverArtistSubtitle = document.getElementById("cover-artist-subtitle");
  const coverImage = document.getElementById("cover-image-large")?.querySelector("img");
  const coverArtist = document.getElementById("cover-artist");
  const coverDate = document.getElementById("cover-date");
  const coverOriginal = document.getElementById("cover-original");
  const coverDescription = document.getElementById("cover-description");
  const coverLyrics = document.getElementById("cover-lyrics");
  if (coverTitle) coverTitle.textContent = cover.title;
  if (coverArtistSubtitle) coverArtistSubtitle.textContent = `By ${cover.artist}`;
  if (coverImage) {
    coverImage.src = cover.image;
    coverImage.alt = `${cover.title} by ${cover.artist}`;
  }
  if (coverArtist) coverArtist.textContent = cover.artist;
  if (coverDate) coverDate.textContent = cover.date;
  if (coverOriginal) coverOriginal.textContent = `${cover.originalSong} by ${cover.originalArtist}`;
  if (coverDescription) coverDescription.textContent = cover.description;
  if (coverLyrics) coverLyrics.textContent = cover.lyrics;
  const moreCoversContainer = document.getElementById("more-covers");
  if (moreCoversContainer) {
    const relatedCovers = coversData.filter((c) => c.artist === cover.artist && c.id !== cover.id);
    moreCoversContainer.innerHTML = "";
    if (relatedCovers.length === 0) {
      moreCoversContainer.innerHTML = "<p>No other covers by this artist.</p>";
    } else {
      relatedCovers.forEach((relatedCover) => {
        const coverCard = document.createElement("div");
        coverCard.className = "cover-card";
        coverCard.innerHTML = `
          <div class="cover-image">
            <img src="${relatedCover.image}" alt="${relatedCover.title} by ${relatedCover.artist}">
          </div>
          <div class="cover-content">
            <h3 class="cover-title">${relatedCover.title}</h3>
            <p class="cover-artist">Originally by ${relatedCover.originalArtist}</p>
            <p class="cover-date">Recorded on ${relatedCover.date}</p>
            <div class="cover-actions">
              <button class="text-btn play-cover-btn" data-audio="${relatedCover.audioUrl}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Play
              </button>
              <a href="cover-detail.html?id=${relatedCover.id}" class="icon-btn small">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </a>
            </div>
          </div>
        `;
        moreCoversContainer.appendChild(coverCard);
        setTimeout(() => {
          coverCard.classList.add("fade-in");
        }, 200);
      });
      const playCoverButtons = moreCoversContainer.querySelectorAll(".play-cover-btn");
      playCoverButtons.forEach((button) => {
        ["touchstart", "click"].forEach((eventType) => {
          button.addEventListener(
            eventType,
            (e) => {
              e.preventDefault();
              e.stopPropagation();
              button.classList.add("clicked");
              setTimeout(() => {
                button.classList.remove("clicked");
              }, 300);
              const relatedCoverIndex = coversData.findIndex((c) => c.audioUrl === button.dataset.audio);
              const audio = document.getElementById("cover-audio");
              const playBtn = document.getElementById("play-btn");
              const playIcon = document.getElementById("play-icon");
              const pauseIcon = document.getElementById("pause-icon");
              if (audio && playIcon && pauseIcon) {
                audio.src = coversData[relatedCoverIndex].audioUrl;
                audio.load();
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                  playPromise
                    .then(() => {
                      playIcon.classList.add("hidden");
                      pauseIcon.classList.remove("hidden");
                    })
                    .catch((error) => {
                      console.log("Playback was prevented:", error);
                      playIcon.classList.remove("hidden");
                      pauseIcon.classList.add("hidden");
                    });
                }
                updateCoverDetails(relatedCoverIndex);
              }
            },
            { passive: false }
          );
        });
      });
    }
  }
}

// Update cover details
function updateCoverDetails(index) {
  const cover = coversData[index];
  window.history.pushState({}, "", `cover-detail.html?id=${cover.id}`);
  displayCoverDetails(cover.id);
}

// Display all covers
function displayAllCovers(filteredCovers = coversData) {
  const allCoversGrid = document.getElementById("all-covers-grid");
  if (!allCoversGrid) return;
  allCoversGrid.innerHTML = "";
  filteredCovers.forEach((cover, index) => {
    const coverCard = document.createElement("div");
    coverCard.className = "cover-card";
    coverCard.innerHTML = `
      <div class="cover-image">
        <img src="${cover.image}" alt="${cover.title} by ${cover.artist}">
      </div>
      <div class="cover-content">
        <h3 class="cover-title">${cover.title}</h3>
        <p class="cover-artist">${cover.artist}</p>
        <p class="cover-date">${cover.date}</p>
        <div class="cover-actions">
          <button class="text-btn play-cover-btn" data-audio="${cover.audioUrl}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Play
          </button>
          <a href="cover-detail.html?id=${cover.id}" class="icon-btn small">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </a>
        </div>
      </div>
    `;
    allCoversGrid.appendChild(coverCard);
    setTimeout(() => {
      coverCard.classList.add("fade-in");
    }, 100 * index);
  });
  const playCoverButtons = allCoversGrid.querySelectorAll(".play-cover-btn");
  playCoverButtons.forEach((button) => {
    ["touchstart", "click"].forEach((eventType) => {
      button.addEventListener(
        eventType,
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          button.classList.add("clicked");
          setTimeout(() => {
            button.classList.remove("clicked");
          }, 300);
          const coverIndex = coversData.findIndex((c) => c.audioUrl === button.dataset.audio);
          window.location.href = `cover-detail.html?id=${coversData[coverIndex].id}`;
        },
        { passive: false }
      );
    });
  });
}

// Setup filters
function setupFilters() {
  const artistFilter = document.getElementById("artist-filter");
  const genreFilter = document.getElementById("genre-filter");
  if (!artistFilter || !genreFilter) return;
  const artists = [...new Set(coversData.map((cover) => cover.artist))].sort();
  artists.forEach((artist) => {
    const option = document.createElement("option");
    option.value = artist;
    option.textContent = artist;
    artistFilter.appendChild(option);
  });
  const genres = [...new Set(coversData.map((cover) => cover.genre))].sort();
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
  function applyFilters() {
    const selectedArtist = artistFilter.value;
    const selectedGenre = genreFilter.value;
    let filteredCovers = coversData;
    if (selectedArtist !== "all") {
      filteredCovers = filteredCovers.filter((cover) => cover.artist === selectedArtist);
    }
    if (selectedGenre !== "all") {
      filteredCovers = filteredCovers.filter((cover) => cover.genre === selectedGenre);
    }
    const allCoversGrid = document.getElementById("all-covers-grid");
    allCoversGrid.classList.add("fade-out");
    setTimeout(() => {
      displayAllCovers(filteredCovers);
      allCoversGrid.classList.remove("fade-out");
    }, 300);
  }
  artistFilter.addEventListener("change", applyFilters);
  genreFilter.addEventListener("change", applyFilters);
  artistFilter.classList.add("fade-in");
  genreFilter.classList.add("fade-in");
}

// Animate cover cards
function animateCoverCards() {
  const cards = document.querySelectorAll(".cover-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate-in");
    }, 100 * index);
  });
}

// CSS animations
document.head.insertAdjacentHTML(
  "beforeend",
  `
  <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(20px); }
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    .fade-in {
      animation: fadeIn 0.5s ease forwards;
    }
    .fade-out {
      animation: fadeOut 0.3s ease forwards;
    }
    .clicked {
      animation: pulse 0.3s ease;
    }
    .playing {
      animation: pulse 2s infinite;
    }
    .loading {
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }
    .audio-player {
      transition: all 0.3s ease;
    }
    .cover-card {
      opacity: 0;
      transform: translateY(20px);
    }
    .cover-card.fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    .animate-in {
      animation: fadeIn 0.5s ease forwards;
    }
    @media (max-width: 768px) {
      .btn, .icon-btn, .text-btn, .control-btn, .play-btn {
        min-height: 44px;
        min-width: 44px;
        padding: 12px;
      }
      .mobile-nav-link {
        padding: 15px;
        margin-bottom: 5px;
      }
      .mobile-menu-btn {
        width: 30px;
        height: 24px;
        padding: 10px;
      }
      .cover-actions {
        padding: 12px;
        gap: 10px;
      }
    }
  </style>
`
);