# Support Dashboard MVP

A static front-end customer support ticketing system built for AI agent integration using Nova Act-powered browser automation.

## Features

- **Modern, responsive design** with glassmorphism effects
- **Three main pages**: Login, Tickets List, and Ticket Details
- **Mock data** for 3 sample support tickets
- **Interactive elements** designed for AI agent automation
- **Console logging** for all actions (perfect for AI monitoring)
- **No backend required** - fully static HTML/CSS/JavaScript

## File Structure

```
support-dashboard/
├── index.html          # Redirects to login
├── login.html          # Login page
├── tickets.html        # Tickets list page
├── ticket.html         # Individual ticket details
├── style.css           # All styling
├── main.js             # JavaScript functionality
└── README.md           # This file
```

## Pages Overview

### 1. Login Page (`/login.html`)
- Simple email/password form
- No real authentication - any credentials work
- Redirects to tickets page after "login"

### 2. Tickets List (`/tickets.html`)
- Displays 3 mock support tickets
- Shows ticket ID, customer name, and message snippet
- "View Details" button for each ticket

### 3. Ticket Details (`/ticket.html?id=TICKET-XXX`)
- Full ticket information display
- Order search functionality (ID: `#search-order`)
- Three action buttons with specific classes:
  - **Refund** (`.btn-refund`)
  - **Escalate** (`.btn-escalate`) 
  - **Mark Resolved** (`.btn-resolved`)

## AI Agent Integration

This dashboard is specifically designed for browser automation:

### Key Selectors for AI Agents:
- `#search-order` - Order search input field
- `.btn-refund` - Refund button
- `.btn-escalate` - Escalate button  
- `.btn-resolved` - Mark resolved button

### Console Logging:
All actions log to browser console:
```javascript
console.log("Refund issued for order A12345")
console.log("Ticket TICKET-001 escalated to supervisor")
console.log("Ticket TICKET-001 marked as resolved")
```

## Usage

### Local Development:
1. Clone or download all files to a directory
2. Open `index.html` in a web browser
3. Or start with any specific page directly

### For AI Agent Testing:
1. Navigate to `ticket.html?id=TICKET-001`
2. Use the search field and action buttons
3. Monitor browser console for logged actions

## Mock Data

The system includes 3 sample tickets:
- **TICKET-001**: Wrong item received (Sarah Johnson)
- **TICKET-002**: Package not delivered (Michael Chen)  
- **TICKET-003**: Return request (Emily Rodriguez)

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile and desktop
- Uses CSS Grid and Flexbox for layouts

## Customization

### Adding More Tickets:
Edit the `mockTickets` array in `main.js`

### Styling Changes:
Modify `style.css` - uses CSS custom properties for easy theming

### Additional Functionality:
Extend the JavaScript functions in `main.js`

## Technical Details

- **No frameworks** - Pure HTML/CSS/JavaScript
- **CSS Features**: Glassmorphism, gradients, animations
- **JavaScript**: ES6+ features, DOM manipulation
- **Responsive**: Mobile-first design approach

Perfect for testing AI agents that need to interact with customer support interfaces!
