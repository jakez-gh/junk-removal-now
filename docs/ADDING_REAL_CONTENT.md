# Adding Real Customer Content

This guide shows how to populate the site with Dee's real business content (reviews, images, testimonials).

## 📝 Step 1: Add Customer Testimonials

Edit [`public/data/testimonials.json`](../public/data/testimonials.json):

```json
{
  "testimonials": [
    {
      "id": 1,
      "name": "John Smith",
      "rating": 5,
      "date": "2025-11-15",
      "text": "Excellent service! They removed all the junk from my garage in under an hour. Professional and courteous.",
      "service": "Junk Removal",
      "location": "Springfield, IL"
    },
    {
      "id": 2,
      "name": "Sarah Johnson",
      "rating": 5,
      "date": "2025-10-22",
      "text": "Great experience! They helped me clear out my late mother's estate. Very respectful and efficient.",
      "service": "Estate Cleanout",
      "location": "Chicago, IL"
    }
  ],
  "reviewStats": {
    "totalReviews": 2,
    "averageRating": 5.0,
    "fiveStar": 2,
    "fourStar": 0,
    "threeStar": 0,
    "twoStar": 0,
    "oneStar": 0
  }
}
```

### Where to Find Reviews

1. **Google My Business** - Export reviews from Google Business Profile
2. **Facebook** - Copy reviews from business page
3. **Yelp** - Extract reviews (with permission)
4. **Direct Customer Feedback** - Email testimonials

**Important**: Always get customer permission before posting their review with their name.

## 🖼️ Step 2: Add Project Images

Place images in the appropriate folders:

- `public/images/hero/` - Main homepage images (truck, team)
- `public/images/services/` - Service-specific photos
- `public/images/projects/` - Before/after photos (get permission!)
- `public/images/testimonials/` - Customer photos (optional, with permission)
- `public/images/team/` - Dee and team member photos

### Image Best Practices

1. **Get Permission**: Written consent for before/after photos showing customer property
2. **Optimize**: Compress images before uploading
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target < 500KB per image
3. **Naming**: Use descriptive names (`garage-cleanout-before.jpg`)
4. **Privacy**: Blur faces, license plates, addresses in photos

### Recommended Image Sizes

- Hero images: 1920x1080px
- Service thumbnails: 800x600px
- Before/after: 1200x900px
- Testimonial photos: 400x400px (square)

## 🔍 Step 3: Find Dee's Business Information

### Google My Business

1. Go to [Google Business Profile](https://business.google.com/)
2. Log in with Dee's Google account
3. Export reviews: Settings → Reviews → Download
4. Download photos from the Photos tab

### Social Media

- **Facebook**: https://facebook.com/[business-name]
- **Yelp**: Search for business name + location
- **Nextdoor**: Check local neighborhood posts

### Business Documentation

Look for:

- Service area coverage (cities/zip codes)
- Phone number and email
- Business hours
- Pricing information
- Insurance/licensing info

## 📊 Step 4: Update Business Information

Edit pages to include real info:

### Contact Page

Update [`pages/contact.tsx`](../pages/contact.tsx):

- Add real phone number
- Add real email address
- Add service area information

### About Page

Update [`pages/about.tsx`](../pages/about.tsx):

- Add Dee's business story
- Add years in business
- Add team information
- Add coverage area

### Services Page

Update [`pages/services.tsx`](../pages/services.tsx):

- Add real pricing (if applicable)
- Add specific services offered
- Add service area map/list

## 🚀 Step 5: Test and Deploy

```bash
# Test locally
npm run dev

# Run tests
npm test

# Deploy
git add .
git commit -m "feat: add real customer testimonials and images"
git push origin master
```

## 📋 Content Checklist

- [ ] Add 5-10 real customer testimonials
- [ ] Upload hero image (truck/team photo)
- [ ] Upload 3-5 before/after project photos
- [ ] Add service-specific images
- [ ] Update contact information
- [ ] Add business story to About page
- [ ] Update service areas
- [ ] Add pricing information (if applicable)
- [ ] Get customer permissions documented

## ⚠️ Legal Considerations

1. **Customer Consent**: Get written permission for:
   - Photos of their property
   - Using their name in testimonials
   - Before/after images
2. **Privacy**: Always blur/remove:
   - Faces (unless permission given)
   - License plates
   - Street addresses
   - Personal information visible in photos

3. **Copyright**: Only use images you have rights to:
   - Photos taken by Dee/team
   - Customer-provided images (with permission)
   - Licensed stock photos
   - Never use images found via Google search

## 💡 Tips

- **Start Small**: Add 3-5 great testimonials rather than many mediocre ones
- **Quality Over Quantity**: One great before/after photo beats ten blurry ones
- **Update Regularly**: Add new reviews and projects monthly
- **Social Proof**: Include Google/Facebook ratings if high (4.5+ stars)
- **Call to Action**: Each testimonial should encourage others to book

## 🔗 Resources

- [Google Business Profile](https://business.google.com/)
- [TinyPNG Image Compressor](https://tinypng.com/)
- [Squoosh Image Optimizer](https://squoosh.app/)
- [Canva - Create Graphics](https://canva.com/)
