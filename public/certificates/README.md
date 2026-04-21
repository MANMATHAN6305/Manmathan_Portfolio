# Certificates Folder

## How to Add Your Certificates

### Step 1: Place Your PDF Files
1. Copy your certificate PDF files to this folder: `public/certificates/`
2. Name them clearly (e.g., `aws-solutions-architect.pdf`, `react-certification.pdf`)

### Step 2: Update the Gallery Component
Edit the file: `src/components/Gallery.tsx`

Find the `CERTIFICATES_DATA` array and add your certificates:

```javascript
const CERTIFICATES_DATA: GalleryItem[] = [
  {
    id: 'cert-aws',                                      // Unique ID (use lowercase with hyphens)
    title: 'AWS Solutions Architect Certificate',        // Certificate name to display
    url: '/certificates/aws-solutions-architect.pdf',    // Path to your PDF
    type: 'pdf',
  },
  {
    id: 'cert-google',
    title: 'Google Cloud Professional',
    url: '/certificates/google-cloud-pro.pdf',
    type: 'pdf',
  },
  // Add more certificates here...
];
```

### Step 3: View Your Certificates
- Go to your portfolio `/gallery` page
- Click on **Certificates** tab
- Your certificates will appear in a grid
- Click to view, or download the PDF

## Features
✅ PDF preview in modal viewer  
✅ Download button  
✅ Open in new tab option  
✅ Responsive grid layout  
✅ Dark mode support  
✅ Professional styling  

## File Naming Best Practices
- Use lowercase letters and hyphens
- Be descriptive: `google-cloud-associate-cloud-engineer.pdf`
- Avoid special characters and spaces
- Examples:
  - ✅ `aws-solutions-architect.pdf`
  - ✅ `microsoft-azure-fundamentals.pdf`
  - ✅ `google-it-automation-with-python.pdf`
  - ❌ `Cert 2024.pdf`
  - ❌ `Certificate_Final!.pdf`

## Supported File Types
- PDF (.pdf) - Primary format

## Tips
- Keep PDF file sizes under 10MB for best performance
- Use descriptive certificate titles
- Organize by issuing organization (AWS, Google, Microsoft, etc.)
- Add issue date or expiry date in the title if relevant

## Example
```
public/
├── certificates/
│   ├── aws-solutions-architect-associate.pdf
│   ├── google-cloud-associate-cloud-engineer.pdf
│   ├── microsoft-azure-developer-associate.pdf
│   └── coursera-react-advanced-patterns.pdf
```

Then in `src/components/Gallery.tsx`:
```javascript
const CERTIFICATES_DATA: GalleryItem[] = [
  {
    id: 'cert-aws',
    title: 'AWS Solutions Architect - Associate',
    url: '/certificates/aws-solutions-architect-associate.pdf',
    type: 'pdf',
  },
  {
    id: 'cert-gcp',
    title: 'Google Cloud Associate Cloud Engineer',
    url: '/certificates/google-cloud-associate-cloud-engineer.pdf',
    type: 'pdf',
  },
  // ... more certificates
];
```

Your certificates will automatically display on the portfolio Gallery page! 🎉
