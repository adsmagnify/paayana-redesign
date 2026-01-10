# Bulk Publish Scripts

## publish-all-drafts.js

Bulk publishes all draft documents in Sanity (Packages, Destinations, and Services).

### Prerequisites

You need a Sanity API token with **Editor** permissions.

### Getting Your API Token

1. Go to [https://sanity.io/manage](https://sanity.io/manage)
2. Select your project (Payaana)
3. Navigate to **API** > **Tokens**
4. Click **Add API token**
5. Name it (e.g., "Bulk Publish Script")
6. Select **Editor** permissions
7. Copy the token

### Usage

#### Option 1: Using npm script

```bash
SANITY_API_TOKEN=your-token-here npm run publish-drafts
```

#### Option 2: Direct node command

```bash
SANITY_API_TOKEN=your-token-here node scripts/publish-all-drafts.js
```

### What It Does

1. **Publishes all draft Packages first** (to avoid reference errors)
2. **Publishes all draft Destinations** (after packages are published)
3. **Publishes all draft Services** (no dependencies)

### Output

The script will show:

- Number of drafts found for each type
- Success/failure status for each document
- Summary of published vs failed documents

### Example Output

```
🚀 Starting bulk publish of all draft documents...
Project: q2w6jxdi
Dataset: production

==================================================
STEP 1: Publishing Packages
==================================================

📦 Fetching draft packages...
Found 5 draft packages
  ✅ Published: Dubai Adventure
  ✅ Published: Tokyo Discovery
  ...

==================================================
STEP 2: Publishing Destinations
==================================================

📦 Fetching draft destinations...
Found 3 draft destinations
  ✅ Published: Dubai
  ✅ Published: Tokyo
  ...

📊 PUBLISHING SUMMARY
==================================================
Packages:    5 published, 0 failed
Destinations: 3 published, 0 failed
Services:    8 published, 0 failed

Total: 16 published, 0 failed

✅ All draft documents published successfully!
```

### Troubleshooting

**Error: "SANITY_API_TOKEN environment variable is required"**

- Make sure you've set the token as an environment variable
- Use: `SANITY_API_TOKEN=your-token node scripts/publish-all-drafts.js`

**Error: "Unauthorized" or "Forbidden"**

- Check that your token has **Editor** permissions
- Regenerate the token if needed

**Error: "Document cannot be deleted as there are references"**

- This happens when published packages reference draft destinations
- **Solution**: Run the fix script after the main script:
  ```bash
  SANITY_API_TOKEN=your-token npm run publish-destinations-fix
  ```
- This script automatically updates package references and publishes destinations

---

## publish-destinations-fix.js

Fixes and publishes destinations that failed due to reference errors.

### When to Use

Run this script **after** running `publish-all-drafts.js` if some destinations failed to publish.

### Usage

```bash
SANITY_API_TOKEN=your-token npm run publish-destinations-fix
```

### What It Does

1. Finds all remaining draft destinations
2. For each destination:
   - Finds all published packages that reference the draft destination
   - Updates those packages to reference the published destination ID
   - Publishes the destination
3. Shows a summary of published vs failed documents

### Example

If `publish-all-drafts.js` published 28 packages but only 12 destinations (27 failed), run:

```bash
SANITY_API_TOKEN=your-token npm run publish-destinations-fix
```

This will fix the 27 failed destinations by updating package references first.

---

## upload-images-to-sanity.ts

Uploads images from the `public` folder to Sanity and automatically matches them with destinations and packages.

### Prerequisites

1. You need a Sanity API token with **Editor** permissions (same as above)
2. Install `tsx` if not already installed:
   ```bash
   npm install -D tsx
   ```

### What It Does

1. **Uploads Gallery Images**: Finds all images matching the pattern `imgi_XX_YY.webp` (where YY is just numbers, no place name) and uploads them to Sanity as gallery documents
2. **Matches Destination Images**: Matches destination images based on file names (e.g., `Kerala.webp` → destination "Kerala")
3. **Matches Package Images**: Matches package images based on their associated destination names

### Usage

#### Option 1: Using npm script

```bash
SANITY_API_TOKEN=your-token-here npm run upload-images
```

#### Option 2: Direct tsx command

```bash
SANITY_API_TOKEN=your-token-here npx tsx scripts/upload-images-to-sanity.ts
```

### Image Naming Conventions

- **Gallery Images**: `imgi_XX_YY.webp` where YY is just numbers (e.g., `imgi_32_11.webp`)
- **Destination/Package Images**: Can be named as:
  - `PLACENAME.webp` (e.g., `Kerala.webp`)
  - `imgi_XX_PLACENAME.webp` (e.g., `imgi_16_Kerala.webp`)

The script will automatically match:

- Destination "Kerala" → `Kerala.webp` or `imgi_XX_Kerala.webp`
- Package with destination "Kerala" → `Kerala.webp` or `imgi_XX_Kerala.webp`

### Example Output

```
🚀 Starting image upload and matching process...
Project: q2w6jxdi
Dataset: production

==================================================
STEP 1: Uploading Gallery Images
==================================================
Found 25 gallery images
  📤 Uploading: imgi_32_11.webp...
  ✅ Created gallery document: imgi_32_11.webp
  ...

Gallery: 25 uploaded, 0 failed

==================================================
STEP 2: Matching Destination Images
==================================================
Found 15 destinations
  ✅ Updated: Kerala with Kerala.webp
  ✅ Updated: Dubai with Dubai.webp
  ...

Destinations: 15 updated, 0 not found

==================================================
STEP 3: Matching Package Images
==================================================
Found 28 packages
  ✅ Updated: Kerala Backwaters Tour with Kerala.webp
  ✅ Updated: Dubai Adventure with Dubai.webp
  ...

Packages: 28 updated, 0 not found

✅ Image upload and matching completed!
```

### Notes

- The script will skip images that are already uploaded (based on asset reference)
- Gallery images are created with default category "adventure" - you can change this in Sanity Studio
- If an image is not found for a destination/package, it will be logged but won't fail the process
