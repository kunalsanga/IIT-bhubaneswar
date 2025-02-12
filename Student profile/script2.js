// Sample data for posts and certificates
const posts = [
    { image: "images/Effective-project-management-tools-1024x1024.avif", title: "My latest project" },
    { image: "images/coffee.jpg", title: "Coffee time!" },
    { image: "images/coding.jpg", title: "Coding session" },
    { image: "images/skyline.jpg", title: "New York skyline" }
];



const certificates = [
    { image: "images/Blue Simple Achievement Certificate.png", title: "Web Development Bootcamp" },
    { image: "images/Blue and Gold Elegant Curved Certificate Of Achievement Certificate.png", title: "JavaScript Advanced" },
    { image: "images/Blue Minimalist Certificate Of Achievement.png", title: "React Masterclass" }
];

// Function to create scroll items
function createScrollItem(item) {
    const scrollItem = document.createElement('div');
    scrollItem.className = 'scroll-item';
    
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    
    const p = document.createElement('p');
    p.textContent = item.title;
    
    scrollItem.appendChild(img);
    scrollItem.appendChild(p);
    
    return scrollItem;
}

// Populate posts
const postsContainer = document.getElementById('posts-container');
posts.forEach(post => {
    postsContainer.appendChild(createScrollItem(post));
});

// Populate certificates
const certificatesContainer = document.getElementById('certificates-container');
certificates.forEach(certificate => {
    certificatesContainer.appendChild(createScrollItem(certificate));
});