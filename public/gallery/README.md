# Gallery Folder

## How to Add Your Gallery Images

### Step 1: Place Your Images
1. Copy your image files to this folder: `public/gallery/`
2. Supported formats: JPG, PNG, GIF, WebP
3. Optimize images for web (recommended size: 100KB - 2MB per image)

### Step 2: Update the Gallery Component
Edit the file: `src/components/Gallery.tsx`

Find the `GALLERY_DATA` array and add your images:

```javascript
const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gallery-hackathon-2024',                    // Unique ID
    title: 'Hackathon 2024 - First Prize',           // Image title to display
    url: '/gallery/hackathon-2024.jpg',              // Path to your image
    type: 'image',
  },
  {
    id: 'gallery-conference-speak',
    title: 'Speaking at Tech Conference 2024',
    url: '/gallery/tech-conference.jpg',
    type: 'image',
  },
  // Add more images here...
];
```

### Step 3: View Your Gallery
- Go to your portfolio `/gallery` page
- Click on **Gallery** tab
- Your images will appear in a responsive grid
- Click to view in full screen with dark overlay

## Features
✅ Lazy loading for performance  
✅ Responsive grid (1-3 columns)  
✅ Full-screen modal viewer  
✅ Smooth hover animations  
✅ Dark mode support  
✅ Image optimization  

## Image Format Guidelines

### JPG Format (Recommended for photos)
- Best for: Real photographs, complex images
- Compression: Good (smaller file size)
- Quality: Use 75-85% quality for best balance
- Examples: Event photos, conference pictures

### PNG Format (Best for clarity)
- Best for: Screenshots, graphics, text-heavy images
- Compression: Lossless (larger file size)
- Quality: Perfect clarity
- Examples: Project screenshots, UI mockups

### WebP Format (Modern & optimized)
- Best for: All types, most efficient
- Compression: Excellent
- Support: Modern browsers
- Examples: Any image type

### GIF Format (For animations)
- Best for: Simple animations, transitions
- File size: Can be large
- Examples: Demo GIFs, tutorials

## File Naming Best Practices
- Use lowercase letters and hyphens
- Be descriptive: `hackathon-first-prize-2024.jpg`
- Avoid special characters and spaces
- Keep names under 50 characters
- Examples:
  - ✅ `tech-conference-speaking.jpg`
  - ✅ `team-photo-2024.png`
  - ✅ `project-demo-dashboard.png`
  - ❌ `IMG_1234.jpg`
  - ❌ `Photo (1) Final!.jpg`

## Image Optimization Tips
- Use an image compressor tool:
  - TinyPNG/TinyJPG (online)
  - ImageOptim (Mac)
  - FileOptimizer (Windows)
- Recommended dimensions: 1200px - 1600px width
- Max file size: 2MB per image
- Target size: 200KB - 800KB after compression

### Recommended Compression Tools
- **Online**: tinypng.com, compressor.io
- **Desktop**: FileOptimizer, ImageMagick
- **VS Code Extension**: PNG Compressor

## Example Directory Structure
```
public/
├── gallery/
│   ├── tech-conference-speaking-2024.jpg
│   ├── hackathon-first-prize.jpg
│   ├── team-photo-office.png
│   ├── project-demo-video-frame.jpg
│   └── webinar-participant.png
```

Then in `src/components/Gallery.tsx`:
```javascript
const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gallery-conference',
    title: 'Speaking at Tech Conference 2024',
    url: '/gallery/tech-conference-speaking-2024.jpg',
    type: 'image',
  },
  {
    id: 'gallery-hackathon',
    title: 'Hackathon - First Prize Winner',
    url: '/gallery/hackathon-first-prize.jpg',
    type: 'image',
  },
  {
    id: 'gallery-team',
    title: 'Team Photo - Office Celebration',
    url: '/gallery/team-photo-office.png',
    type: 'image',
  },
  {
    id: 'gallery-project',
    title: 'Project Demo - Dashboard UI',
    url: '/gallery/project-demo-video-frame.jpg',
    type: 'image',
  },
  // ... more images
];
```

## Gallery Ideas
- 📸 Professional event photos
- 🏆 Awards and achievements
- 👥 Team photos
- 🎤 Speaking engagements
- 🏅 Hackathon wins
- 💼 Office/workspace shots
- 📱 Project screenshots
- 🎓 Educational events
- 🌐 Travel/international experience
- 🚀 Product launches

Your gallery will automatically display on the portfolio Gallery page! 📸✨
