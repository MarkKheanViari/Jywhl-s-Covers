// Sample data for covers
const coversData = [
    {
      id: 1,
      title: "Acoustic Rendition",
      artist: "Sarah Johnson",
      image: "https://placehold.co/400x400",
      date: "March 2023",
      genre: "Acoustic",
      description: "A beautiful acoustic cover that brings a new perspective to the original song. The artist uses gentle guitar strumming and soft vocals to create an intimate atmosphere.",
      originalSong: "Starlight",
      originalArtist: "The Luminaries",
      videoUrl: "https://example.com/video",
      audioUrl: "https://example.com/audio",
      lyrics: `Verse 1:
  Under the starlight
  We found our way
  Through the darkness
  To a brighter day
  
  Chorus:
  And I'll remember
  The way you shine
  Like starlight
  In the night sky`
    },
    {
      id: 2,
      title: "Piano Version",
      artist: "Michael Chen",
      image: "https://placehold.co/400x400",
      date: "June 2023",
      genre: "Classical",
      description: "A delicate piano interpretation that captures the emotional core of the original piece. The pianist's technique brings out nuances that weren't apparent in the original recording.",
      originalSong: "Moonlight Sonata",
      originalArtist: "Ludwig van Beethoven",
      videoUrl: "https://example.com/video",
      audioUrl: "https://example.com/audio",
      lyrics: `Instrumental piece`
    },
    {
      id: 3,
      title: "Jazz Interpretation",
      artist: "Elena Rodriguez",
      image: "https://placehold.co/400x400",
      date: "September 2023",
      genre: "Jazz",
      description: "A soulful jazz rendition that transforms the original pop song into a smoky lounge classic. The saxophone solo in the middle section is particularly moving.",
      originalSong: "Summer Nights",
      originalArtist: "The Dreamers",
      videoUrl: "https://example.com/video",
      audioUrl: "https://example.com/audio",
      lyrics: `When the summer nights are long
  And the stars are bright above
  I think of you, my dear
  And our endless summer love`
    },
    {
      id: 4,
      title: "Orchestral Arrangement",
      artist: "David Kim",
      image: "https://placehold.co/400x400",
      date: "December 2023",
      genre: "Orchestral",
      description: "A grand orchestral arrangement that elevates the original song to cinematic heights. The full string section adds depth and emotion to every phrase.",
      originalSong: "Eternal Flame",
      originalArtist: "The Echoes",
      videoUrl: "https://example.com/video",
      audioUrl: "https://example.com/audio",
      lyrics: `Like an eternal flame
  Our love will never die
  Through storms and through the rain
  We'll reach beyond the sky`
    },
    {
      id: 5,
      title: "Acoustic Duet",
      artist: "Olivia & James",
      image: "https://placehold.co/400x400",
      date: "February 2024",
      genre: "Acoustic",
      description: "A heartfelt duet that reimagines the original solo piece as a conversation between two voices. The harmonies in the chorus are particularly beautiful.",
      originalSong: "Solitude",
      originalArtist: "Emma Wright",
      videoUrl: "https://example.com/video",
      audioUrl: "https://example.com/audio",
      lyrics: `No more solitude
  Now that I've found you
  No more lonely nights
  Now that you're by my side`
    },
    {
      id: 6,
      title: "Live Performance",
      artist: "The Harmonies",
      image: "https://placehold.co/400x400",
      date: "April 2024",
      genre: "Live",
      description: "A raw and energetic live performance that captures the essence of the original while adding the unique atmosphere of a live venue. The audience's reaction adds to the magic.",
      originalSong: "Revolution",
      originalArtist: "The Rebels",
      videoUrl: "https://example.com/video",
      audioUrl: "https://example.com/audio",
      lyrics: `It's time for a revolution
  A change in the air
  It's time for a solution
  To show that we care`
    },
    {
      id: 7,
      title: "Electronic Remix",
      artist: "DJ Pulse",
      image: "https://placehold.co/400x400",
      date: "May 2023",
      genre: "Electronic",
      description: "A pulsating electronic remix that transforms the mellow original into a dance floor anthem. The drop after the second chorus is particularly effective.",
      originalSong: "Whispers",
      originalArtist: "Silent Echo",
      videoUrl: "https://example.com/video",
      audioUrl: "https://example.com/audio",
      lyrics: `Whispers in the dark
  Secrets of the heart
  Shadows moving slow
  Things only we know`
    },
    {
      id: 8,
      title: "Folk Rendition",
      artist: "The Wanderers",
      image: "https://placehold.co/400x400",
      date: "July 2023",
      genre: "Folk",
      description: "A rustic folk interpretation featuring acoustic guitar, banjo, and harmonica. The stripped-back arrangement highlights the storytelling aspect of the lyrics.",
      originalSong: "City Lights",
      originalArtist: "Urban Poets",
      videoUrl: "https://example.com/video",
      audioUrl: "https://example.com/audio",
      lyrics: `Far from the city lights
  Under the stars tonight
  Finding our way back home
  No matter how far we roam`
    },
    {
      id: 9,
      title: "A Cappella Version",
      artist: "Vocal Harmony",
      image: "https://placehold.co/400x400",
      date: "August 2023",
      genre: "A Cappella",
      description: "A stunning a cappella arrangement that recreates all the instrumental parts using only human voices. The layered harmonies create a rich tapestry of sound.",
      originalSong: "Ocean Waves",
      originalArtist: "Coastal Dreams",
      videoUrl: "https://example.com/video",
      audioUrl: "https://example.com/audio",
      lyrics: `Like ocean waves
  Rolling to shore
  Our love remains
  Forevermore`
    }
  ];
  
  // Set current year in footer
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
  });
  
  // Display cover details on the cover detail page
  function displayCoverDetails(coverId) {
    const cover = coversData.find(cover => cover.id === coverId);
    
    if (!cover) return;
  
    // Update page title
    document.title = `${cover.title} by ${cover.artist} - Music Cover Museum`;
    
    // Update header content
    document.getElementById('cover-title').textContent = cover.title;
    document.getElementById('cover-artist-subtitle').textContent = `By ${cover.artist}`;
    
    // Update cover image
    const coverImage = document.getElementById('cover-image-large').querySelector('img');
    coverImage.src = cover.image;
    coverImage.alt = `${cover.title} by ${cover.artist}`;
    
    // Update metadata
    document.getElementById('cover-artist').textContent = cover.artist;
    document.getElementById('cover-date').textContent = cover.date;
    document.getElementById('cover-original').textContent = `${cover.originalSong} by ${cover.originalArtist}`;
    
    // Update description and lyrics
    document.getElementById('cover-description').textContent = cover.description;
    document.getElementById('cover-lyrics').textContent = cover.lyrics;
  }
  
  // Display all covers on the all covers page
  function displayAllCovers() {
    const allCoversGrid = document.getElementById('all-covers-grid');
    
    if (!allCoversGrid) return;
    
    allCoversGrid.innerHTML = '';
    
    coversData.forEach(cover => {
      const coverCard = document.createElement('a');
      coverCard.href = `cover-detail.html?id=${cover.id}`;
      coverCard.className = 'cover-card';
      
      coverCard.innerHTML = `
        <div class="cover-image-container">
          <img src="${cover.image}" alt="${cover.title} by ${cover.artist}" class="cover-image">
          <div class="cover-overlay">
            <div class="play-button">
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
      `;
      
      allCoversGrid.appendChild(coverCard);
    });
  }
  
  // Set up filters on the all covers page
  function setupFilters() {
    const genreFilters = document.getElementById('genre-filters');
    
    if (!genreFilters) return;
    
    // Get unique genres
    const genres = [...new Set(coversData.map(cover => cover.genre))].sort();
    
    // Create genre checkboxes
    genres.forEach(genre => {
      const filterOption = document.createElement('label');
      filterOption.className = 'filter-option';
      
      filterOption.innerHTML = `
        <input type="checkbox" class="filter-checkbox" value="${genre}">
        <span class="filter-label">${genre}</span>
      `;
      
      genreFilters.appendChild(filterOption);
    });
    
    // Add event listeners for search and filters
    const searchInput = document.getElementById('search-input');
    const genreCheckboxes = document.querySelectorAll('.filter-checkbox');
    const sortSelect = document.getElementById('sort-select');
    
    if (searchInput) {
      searchInput.addEventListener('input', filterCovers);
    }
    
    genreCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', filterCovers);
    });
    
    if (sortSelect) {
      sortSelect.addEventListener('change', filterCovers);
    }
  }
  
  // Filter and sort covers based on user selections
  function filterCovers() {
    const searchInput = document.getElementById('search-input');
    const genreCheckboxes = document.querySelectorAll('.filter-checkbox:checked');
    const sortSelect = document.getElementById('sort-select');
    
    let filteredCovers = [...coversData];
    
    // Apply search filter
    if (searchInput && searchInput.value) {
      const searchTerm = searchInput.value.toLowerCase();
      filteredCovers = filteredCovers.filter(cover => 
        cover.title.toLowerCase().includes(searchTerm) || 
        cover.artist.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply genre filter
    if (genreCheckboxes.length > 0) {
      const selectedGenres = Array.from(genreCheckboxes).map(cb => cb.value);
      filteredCovers = filteredCovers.filter(cover => selectedGenres.includes(cover.genre));
    }
    
    // Apply sorting
    if (sortSelect) {
      const sortValue = sortSelect.value;
      
      switch (sortValue) {
        case 'newest':
          // Simple sort by id (assuming higher id = newer)
          filteredCovers.sort((a, b) => b.id - a.id);
          break;
        case 'oldest':
          filteredCovers.sort((a, b) => a.id - b.id);
          break;
        case 'az':
          filteredCovers.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'za':
          filteredCovers.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }
    }
    
    // Update the display
    const allCoversGrid = document.getElementById('all-covers-grid');
    
    if (allCoversGrid) {
      allCoversGrid.innerHTML = '';
      
      if (filteredCovers.length === 0) {
        allCoversGrid.innerHTML = '<p class="no-results">No covers match your filters. Try adjusting your search criteria.</p>';
        return;
      }
      
      filteredCovers.forEach(cover => {
        const coverCard = document.createElement('a');
        coverCard.href = `cover-detail.html?id=${cover.id}`;
        coverCard.className = 'cover-card';
        
        coverCard.innerHTML = `
          <div class="cover-image-container">
            <img src="${cover.image}" alt="${cover.title} by ${cover.artist}" class="cover-image">
            <div class="cover-overlay">
              <div class="play-button">
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
        `;
        
        allCoversGrid.appendChild(coverCard);
      });
    }
  }