// Sample data for covers (4 songs with updated audio URLs)
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
        audioUrl: "audio/1.m4a", // Updated to match directory
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
        audioUrl: "audio/2.m4a", // Updated to match directory
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
        audioUrl: "audio/4.m4a", // Updated to match directory
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

// Set current year in footer and initialize audio
document.addEventListener('DOMContentLoaded', function() {
    const currentYearElements = document.querySelectorAll('#current-year');
    const currentYear = new Date().getFullYear();
    
    currentYearElements.forEach(element => {
        element.textContent = currentYear;
    });

    // Handle cover detail page
    if (window.location.pathname.includes('cover-detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const coverId = parseInt(urlParams.get('id'));
        
        if (coverId) {
            displayCoverDetails(coverId);
        }
    }

    // Handle all covers page
    if (window.location.pathname.includes('all-covers.html')) {
        displayAllCovers();
        setupFilters();
    }

    // Handle audio playback on index and all-covers pages
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-audio');
            const audioElement = this.closest('.cover-card').querySelector('audio') || new Audio(audioSrc);
            
            if (!audioElement.id) {
                audioElement.id = `audio-${Math.random().toString(36).substr(2, 9)}`;
                this.closest('.cover-card').appendChild(audioElement);
            }

            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        });
    });
});

// Display cover details on the cover detail page
function displayCoverDetails(coverId) {
    const cover = coversData.find(cover => cover.id === coverId);
    
    if (!cover) return;

    document.title = `${cover.title} by ${cover.artist} - Music Cover Museum`;
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
    
    // Set audio source
    const audioElement = document.getElementById('cover-audio');
    if (audioElement) {
        audioElement.querySelector('source').src = cover.audioUrl;
        audioElement.load(); // Reload to apply new source
    }
}

// Display all covers on the all covers page
function displayAllCovers() {
    const allCoversGrid = document.getElementById('all-covers-grid');
    
    if (!allCoversGrid) return;
    
    allCoversGrid.innerHTML = '';
    
    coversData.forEach(cover => {
        const coverCard = document.createElement('div');
        coverCard.className = 'cover-card';
        
        coverCard.innerHTML = `
            <div class="cover-image-container">
                <img src="${cover.image}" alt="${cover.title} by ${cover.artist}" class="cover-image">
                <div class="cover-overlay">
                    <div class="play-button" data-audio="${cover.audioUrl}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-play">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                    </div>
                </div>
            </div>
            <h3 class="cover-title">${cover.title}</h3>
            <p class="cover-artist">${cover.artist}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                <p class="cover-date">${cover.date}</p>
                <span class="genre-tag">${cover.genre}</span>
            </div>
            <audio id="audio-${cover.id}" preload="metadata">
                <source src="${cover.audioUrl}" type="audio/mp4">
            </audio>
        `;
        
        allCoversGrid.appendChild(coverCard);
    });
}

// Rest of the script (setupFilters, filterCovers) remains unchanged