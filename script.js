// Sample data for covers (same as before)
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
  Pero bakit pag. - tama na`
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
  And people that talk too much`
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
  Binibini kong ginto hanggang kaluluwa~`
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
  
  Through the years😩, you've never let me down
  You turned my life around, the sweetest days I've found
  I've found with you through the years
  I've never been afraid, I've loved the life we've made
  And I'm so glad I've stayed right here with you
  Through the years`
    }
];

// Audio player functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearElements = document.querySelectorAll('#current-year');
    const currentYear = new Date().getFullYear();
    currentYearElements.forEach(element => {
        element.textContent = currentYear;
    });

    // Format time (mm:ss)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Audio player setup (used in both index.html and cover-detail.html)
    function setupAudioPlayer(audioElement, playBtn, playIcon, pauseIcon, progressSlider, currentTimeDisplay, durationDisplay, muteBtn, volumeIcon, muteIcon, volumeSlider, prevBtn, nextBtn) {
        let currentTrackIndex = 0;

        // Update progress slider and time display
        audioElement.addEventListener('timeupdate', () => {
            const currentTime = audioElement.currentTime;
            const duration = audioElement.duration;
            const progressPercent = (currentTime / duration) * 100;
            progressSlider.value = progressPercent || 0;
            currentTimeDisplay.textContent = formatTime(currentTime);
            durationDisplay.textContent = formatTime(duration);
        });

        // Set duration on load
        audioElement.addEventListener('loadedmetadata', () => {
            durationDisplay.textContent = formatTime(audioElement.duration);
        });

        // Play/pause toggle
        playBtn.addEventListener('click', () => {
            if (audioElement.paused) {
                audioElement.play();
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
            } else {
                audioElement.pause();
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
            }
        });

        // Seek with progress slider
        progressSlider.addEventListener('input', () => {
            const seekTime = (progressSlider.value / 100) * audioElement.duration;
            audioElement.currentTime = seekTime;
        });

        // Mute/unmute
        muteBtn.addEventListener('click', () => {
            audioElement.muted = !audioElement.muted;
            volumeIcon.classList.toggle('hidden');
            muteIcon.classList.toggle('hidden');
            volumeSlider.value = audioElement.muted ? 0 : audioElement.volume;
        });

        // Volume control
        volumeSlider.addEventListener('input', () => {
            audioElement.volume = volumeSlider.value;
            audioElement.muted = audioElement.volume == 0;
            volumeIcon.classList.toggle('hidden', audioElement.muted);
            muteIcon.classList.toggle('hidden', !audioElement.muted);
        });

        // Load track
        function loadTrack(index) {
            audioElement.src = coversData[index].audioUrl;
            audioElement.load();
            audioElement.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        }

        // Play next/previous track
        nextBtn.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex + 1) % coversData.length;
            loadTrack(currentTrackIndex);
            updateCoverDetails(currentTrackIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentTrackIndex = (currentTrackIndex - 1 + coversData.length) % coversData.length;
            loadTrack(currentTrackIndex);
            updateCoverDetails(currentTrackIndex);
        });

        // Auto-play next track when current track ends
        audioElement.addEventListener('ended', () => {
            currentTrackIndex = (currentTrackIndex + 1) % coversData.length;
            loadTrack(currentTrackIndex);
            updateCoverDetails(currentTrackIndex);
        });

        return { loadTrack, setCurrentTrackIndex: (index) => { currentTrackIndex = index; } };
    }

    // Index.html audio player setup
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
        const audio = document.getElementById('audio');
        const playBtn = document.getElementById('play-btn');
        const playIcon = document.getElementById('play-icon');
        const pauseIcon = document.getElementById('pause-icon');
        const progressSlider = document.getElementById('progress-slider');
        const currentTimeDisplay = document.getElementById('current-time');
        const durationDisplay = document.getElementById('duration');
        const muteBtn = document.getElementById('mute-btn');
        const volumeIcon = document.getElementById('volume-icon');
        const muteIcon = document.getElementById('mute-icon');
        const volumeSlider = document.getElementById('volume-slider');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        const player = setupAudioPlayer(audio, playBtn, playIcon, pauseIcon, progressSlider, currentTimeDisplay, durationDisplay, muteBtn, volumeIcon, muteIcon, volumeSlider, prevBtn, nextBtn);

        // Play All functionality
        const playAllBtn = document.getElementById('play-all-btn');
        playAllBtn.addEventListener('click', () => {
            player.setCurrentTrackIndex(0);
            player.loadTrack(0);
        });

        // Individual cover play buttons
        const playCoverButtons = document.querySelectorAll('.play-cover-btn');
        playCoverButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                player.setCurrentTrackIndex(index);
                player.loadTrack(index);
            });
        });
    }

    // Cover-detail.html audio player setup
    if (window.location.pathname.includes('cover-detail.html')) {
        const audio = document.getElementById('cover-audio');
        const playBtn = document.getElementById('play-btn');
        const playIcon = document.getElementById('play-icon');
        const pauseIcon = document.getElementById('pause-icon');
        const progressSlider = document.getElementById('progress-slider');
        const currentTimeDisplay = document.getElementById('current-time');
        const durationDisplay = document.getElementById('duration');
        const muteBtn = document.getElementById('mute-btn');
        const volumeIcon = document.getElementById('volume-icon');
        const muteIcon = document.getElementById('mute-icon');
        const volumeSlider = document.getElementById('volume-slider');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        const urlParams = new URLSearchParams(window.location.search);
        const coverId = parseInt(urlParams.get('id'));
        const coverIndex = coversData.findIndex(cover => cover.id === coverId);

        const player = setupAudioPlayer(audio, playBtn, playIcon, pauseIcon, progressSlider, currentTimeDisplay, durationDisplay, muteBtn, volumeIcon, muteIcon, volumeSlider, prevBtn, nextBtn);
        player.setCurrentTrackIndex(coverIndex);
        player.loadTrack(coverIndex);

        if (coverId) {
            displayCoverDetails(coverId);
        }
    }

    // All-covers.html setup
    if (window.location.pathname.includes('all-covers.html')) {
        displayAllCovers();
        setupFilters();
    }
});

// Display cover details on the cover detail page
function displayCoverDetails(coverId) {
    const cover = coversData.find(cover => cover.id === coverId);
    
    if (!cover) return;

    document.title = `${cover.title} by ${cover.artist} - JYWHL Collections`;
    document.getElementById('cover-title').textContent = cover.title;
    document.getElementById('cover-artist-subtitle').textContent = `By ${cover.artist}`;
    
    const coverImage = document.getElementById('cover-image-large').querySelector('img');
    coverImage.src = cover.image;
    coverImage.alt = `${cover.title} by ${cover.artist}`;
    
    document.getElementById('cover-artist').textContent = cover.artist;
    document.getElementById('cover-date').textContent = cover.date;
    document.getElementById('cover-original').textContent = `${cover.originalSong} by ${cover.originalArtist}`;
    document.getElementById('cover-description').textContent = cover.description;
    document.getElementById('cover-lyrics').textContent = cover.lyrics;

    // Populate "More From This Artist" section
    const moreCoversContainer = document.getElementById('more-covers');
    const relatedCovers = coversData.filter(c => c.artist === cover.artist && c.id !== cover.id);
    
    moreCoversContainer.innerHTML = '';
    if (relatedCovers.length === 0) {
        moreCoversContainer.innerHTML = '<p>No other covers by this artist.</p>';
    } else {
        relatedCovers.forEach(relatedCover => {
            const coverCard = document.createElement('div');
            coverCard.className = 'cover-card';
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
        });

        // Add event listeners for play buttons in "More From This Artist"
        const playCoverButtons = moreCoversContainer.querySelectorAll('.play-cover-btn');
        playCoverButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const relatedCoverIndex = coversData.findIndex(c => c.audioUrl === button.dataset.audio);
                const audio = document.getElementById('cover-audio');
                const playBtn = document.getElementById('play-btn');
                const playIcon = document.getElementById('play-icon');
                const pauseIcon = document.getElementById('pause-icon');
                audio.src = coversData[relatedCoverIndex].audioUrl;
                audio.load();
                audio.play();
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
                updateCoverDetails(relatedCoverIndex);
            });
        });
    }
}

// Update cover details when switching tracks
function updateCoverDetails(index) {
    const cover = coversData[index];
    window.history.pushState({}, '', `cover-detail.html?id=${cover.id}`);
    displayCoverDetails(cover.id);
}

// Display all covers on the all covers page
function displayAllCovers(filteredCovers = coversData) {
    const allCoversGrid = document.getElementById('all-covers-grid');
    
    if (!allCoversGrid) return;
    
    allCoversGrid.innerHTML = '';
    
    filteredCovers.forEach(cover => {
        const coverCard = document.createElement('div');
        coverCard.className = 'cover-card';
        
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
    });

    // Add event listeners for play buttons in all-covers.html
    const playCoverButtons = allCoversGrid.querySelectorAll('.play-cover-btn');
    playCoverButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const coverIndex = coversData.findIndex(c => c.audioUrl === button.dataset.audio);
            window.location.href = `cover-detail.html?id=${coversData[coverIndex].id}`;
        });
    });
}

// Setup filters for all-covers.html
function setupFilters() {
    const artistFilter = document.getElementById('artist-filter');
    const genreFilter = document.getElementById('genre-filter');

    // Populate artist filter
    const artists = [...new Set(coversData.map(cover => cover.artist))].sort();
    artists.forEach(artist => {
        const option = document.createElement('option');
        option.value = artist;
        option.textContent = artist;
        artistFilter.appendChild(option);
    });

    // Populate genre filter
    const genres = [...new Set(coversData.map(cover => cover.genre))].sort();
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });

    // Filter covers based on selections
    function applyFilters() {
        const selectedArtist = artistFilter.value;
        const selectedGenre = genreFilter.value;

        let filteredCovers = coversData;

        if (selectedArtist !== 'all') {
            filteredCovers = filteredCovers.filter(cover => cover.artist === selectedArtist);
        }

        if (selectedGenre !== 'all') {
            filteredCovers = filteredCovers.filter(cover => cover.genre === selectedGenre);
        }

        displayAllCovers(filteredCovers);
    }

    // Add event listeners for filter changes
    artistFilter.addEventListener('change', applyFilters);
    genreFilter.addEventListener('change', applyFilters);
}