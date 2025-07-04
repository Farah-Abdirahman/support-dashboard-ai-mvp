# Support Dashboard MVP

A static front-end MVP for a customer support ticketing system, designed to be used by Nova Act-powered AI agents for automated ticket resolution.

## Features

- **Login Page** (`login.html`) - Simple authentication interface
- **Tickets List** (`tickets.html`) - Overview of all support tickets
- **Ticket Details** (`ticket.html`) - Detailed view with action buttons
- **Responsive Design** - Works on desktop and mobile devices
- **Console Logging** - All actions are logged for AI agent integration

## File Structure

```
support-dashboard/
├── login.html          # Login page
├── tickets.html        # Tickets list page
├── ticket.html         # Ticket detail page
├── style.css          # Main stylesheet
├── main.js            # Shared JavaScript utilities
└── README.md          # This file
```

## Getting Started

1. **Local Development**: Simply open `login.html` in your web browser
2. **Web Server**: Serve the files using any static web server

### Using Python's built-in server:
```bash
cd support-dashboard
python -m http.server 8000
```
Then visit: `http://localhost:8000/login.html`

### Using Node.js serve:
```bash
npx serve .
```

## Usage Flow

1. **Login** (`login.html`)
   - Enter any email and password
   - Click "Login" to proceed to tickets list

2. **View Tickets** (`tickets.html`)
   - See list of mock support tickets
   - Click "View Details" to see full ticket information

3. **Ticket Actions** (`ticket.html`)
   - View complete ticket details
   - Use order search field (ID: `#search-order`)
   - Click action buttons:
     - **Refund** (`.btn-refund`)
     - **Escalate** (`.btn-escalate`) 
     - **Mark Resolved** (`.btn-resolved`)

## Mock Data

The dashboard includes 3 sample tickets:
- **TICKET-001**: Damaged product refund request
- **TICKET-002**: Missing package inquiry
- **TICKET-003**: Duplicate billing issue

## AI Agent Integration

This dashboard is designed for browser automation tools like Nova Act. Key elements for automation:

### Selectors for AI Agents:
- Order search input: `#search-order`
- Refund button: `.btn-refund`
- Escalate button: `.btn-escalate`
- Resolve button: `.btn-resolved`

### Console Logging:
All button clicks and actions are logged to the browser console for monitoring and debugging.

## Customization

- **Styling**: Modify `style.css` for visual changes
- **Mock Data**: Update ticket data in the JavaScript sections of each HTML file
- **Actions**: Extend button handlers in `ticket.html` for additional functionality

## Browser Compatibility

- Chrome/Chromium (recommended for AI agents)
- Firefox
- Safari
- Edge

## Notes

- No backend required - all data is hardcoded
- No real authentication - any credentials will work
- All actions are simulated and logged to console
- Responsive design works on mobile devices
- Uses modern CSS features (backdrop-filter, grid, flexbox)
