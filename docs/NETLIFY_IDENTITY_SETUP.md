# Netlify Identity Setup Instructions

## 🚀 Quick Setup for Jake

Follow these steps to enable enterprise-grade authentication for Dee's admin interface:

---

## Step 1: Enable Netlify Identity

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select the **Junk Removal Now** site
3. Go to **Site settings** > **Identity**
4. Click **"Enable Identity"**

---

## Step 2: Configure Registration Preferences

Under **Identity** > **Settings and usage**:

1. **Registration preferences**: Set to **"Invite only"**
   - This ensures only authorized users (Dee) can access the admin

2. **External providers**: Keep disabled (optional: enable Google/GitHub login later)

3. **Enable Git Gateway**:
   - Scroll down to **Services** > **Git Gateway**
   - Click **"Enable Git Gateway"**
   - This allows the CMS to commit changes to your Git repository

---

## Step 3: Invite Dee as an Admin User

1. Go to **Identity** tab
2. Click **"Invite users"**
3. Enter Dee's email address
4. Click **"Send invitation"**

Dee will receive an email to set up her password.

---

## Step 4: Configure Git Gateway

The Git Gateway is already configured in the CMS config file:

```yaml
backend:
  name: git-gateway
  branch: main
```

This allows authenticated users to make changes through the CMS that are committed to your repository.

---

## Step 5: Test the Admin Interface

1. Visit: `https://your-site-name.netlify.app/admin`
2. Click "Login with Netlify Identity"
3. Use the invited email to log in
4. Verify you can access the admin dashboard

---

## Step 6: Configure Email Templates (Optional)

Customize email templates for invitations and password resets:

1. Go to **Identity** > **Emails**
2. Customize templates for:
   - Invitation email
   - Confirmation email
   - Password recovery
   - Email change confirmation

---

## 🔐 Security Settings (Recommended)

### Enable Two-Factor Authentication

1. Go to your Netlify **User settings** (not site settings)
2. Click **Security**
3. Enable **Two-factor authentication**

### Set Session Duration

Under **Identity** > **Settings**:

- **Token refresh**: Set to appropriate duration (default is fine)
- **Session duration**: Consider shorter duration for sensitive data

---

## 📊 Monitor Admin Access

Track admin activity:

1. Go to **Identity** tab
2. View all registered users
3. See last login times
4. Revoke access if needed

---

## 🔄 Deployment Settings

Ensure automatic deployments are enabled:

1. Go to **Site settings** > **Build & deploy**
2. **Build settings**: Should already be configured
3. **Deploy contexts**: Production branch should be `main`
4. **Deploy notifications**: Enable for Dee to get deployment emails

---

## ✅ Verification Checklist

- [ ] Netlify Identity is enabled
- [ ] Registration is set to "Invite only"
- [ ] Git Gateway is enabled
- [ ] Dee has been invited as a user
- [ ] Admin page loads at `/admin`
- [ ] CMS can authenticate and load content
- [ ] Test creating/editing content works
- [ ] Changes trigger new deployments
- [ ] Dee can successfully log in and make changes

---

## 🎯 What's Already Configured

The following are already set up in the codebase:

✅ **Netlify CMS Configuration**: `/public/admin/config.yml`  
✅ **Identity Widget**: Included in `_document.tsx`  
✅ **Redirect Logic**: Configured in `_app.tsx`  
✅ **Admin Page**: `/public/admin/index.html`  
✅ **Prepopulated Content**: All business settings files created  
✅ **Editorial Workflow**: Enabled in CMS config  
✅ **Security Headers**: Configured in `netlify.toml`

---

## 📝 Content Collections Available

Dee can manage:

1. **Business Settings**
   - Company information
   - Contact details
   - Business hours
   - Service areas
   - Social media links
   - Pricing and services
   - SEO settings
   - Branding/design

2. **Customer Testimonials**
3. **FAQ Items**
4. **Project Gallery**
5. **Blog Posts**

---

## 🆘 Troubleshooting

### Issue: Admin page shows "Error loading config"

**Solution**: Verify Git Gateway is enabled

### Issue: Can't log in

**Solution**: Check that Identity is enabled and invitation was accepted

### Issue: Changes don't trigger deployments

**Solution**: Verify Git Gateway has write access to the repository

### Issue: "This site is not configured to use Netlify Identity"

**Solution**: Enable Identity in Netlify dashboard

---

## 🔗 Useful Links

- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Netlify CMS Documentation](https://www.netlifycms.org/docs/)
- [Git Gateway Documentation](https://docs.netlify.com/visitor-access/git-gateway/)

---

## 📞 Next Steps

1. Deploy the site to Netlify (if not already deployed)
2. Follow steps 1-5 above
3. Send Dee the admin guide: `docs/DEE_ADMIN_GUIDE.md`
4. Do a walkthrough with Dee to show her the interface

---

**Estimated Setup Time**: 10-15 minutes  
**Difficulty**: Easy  
**Cost**: Free (included with Netlify)
