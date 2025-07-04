// Mock Data for Support Dashboard
const mockTickets = [
    {
        id: 'TICKET-001',
        customerName: 'Sarah Johnson',
        orderId: 'ORD-A12345',
        status: 'open',
        message: 'I received the wrong item in my order. I ordered a blue sweater but received a red one instead. Could you please help me exchange it?',
        snippet: 'I received the wrong item in my order. I ordered a blue sweater but received a red one instead...',
        createdAt: '2025-01-15 10:30 AM',
        priority: 'medium'
    },
    {
        id: 'TICKET-002',
        customerName: 'Michael Chen',
        orderId: 'ORD-B67890',
        status: 'pending',
        message: 'My package was supposed to arrive yesterday but it never showed up. The tracking shows it was delivered but I never received it. This is very frustrating as I needed these items for an important event.',
        snippet: 'My package was supposed to arrive yesterday but it never showed up. The tracking shows it was delivered...',
        createdAt: '2025-01-14 2:15 PM',
        priority: 'high'
    },
    {
        id: 'TICKET-003',
        customerName: 'Emily Rodriguez',
        orderId: 'ORD-C54321',
        status: 'open',
        message: 'I would like to return my recent purchase as it doesn\'t fit properly. The size chart seemed accurate but the actual fit is quite different. Can you help me process a return?',
        snippet: 'I would like to return my recent purchase as it doesn\'t fit properly. The size chart seemed accurate...',
        createdAt: '2025-01-13 9:45 AM',
        priority: 'low'
    }
];

// Utility Functions
function getTicketById(ticketId) {
    return mockTickets.find(ticket => ticket.id === ticketId);
}

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function formatStatus(status) {
    const statusMap = {
        'open': 'Open',
        'pending': 'Pending',
        'resolved': 'Resolved',
        'closed': 'Closed'
    };
    return statusMap[status] || status;
}

// Login Functionality
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Mock authentication - always successful
    console.log('Login attempt:', { email, password });
    
    // Simulate loading
    const loginBtn = document.querySelector('.btn-primary');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'Logging in...';
    loginBtn.disabled = true;
    
    setTimeout(() => {
        // Redirect to tickets page
        window.location.href = 'tickets.html';
    }, 1000);
}

// Tickets List Functionality
function renderTicketsList() {
    const ticketsContainer = document.getElementById('tickets-container');
    if (!ticketsContainer) return;
    
    ticketsContainer.innerHTML = mockTickets.map(ticket => `
        <div class="ticket-card fade-in">
            <div class="ticket-header">
                <span class="ticket-id">${ticket.id}</span>
                <span class="ticket-status status-${ticket.status}">${formatStatus(ticket.status)}</span>
            </div>
            <div class="customer-name">${ticket.customerName}</div>
            <div class="ticket-snippet">${ticket.snippet}</div>
            <a href="ticket.html?id=${ticket.id}" class="btn btn-secondary">View Details</a>
        </div>
    `).join('');
}

// Ticket Detail Functionality
function renderTicketDetail() {
    const ticketId = getUrlParameter('id');
    if (!ticketId) {
        document.body.innerHTML = '<div class="container"><h1>Ticket not found</h1></div>';
        return;
    }
    
    const ticket = getTicketById(ticketId);
    if (!ticket) {
        document.body.innerHTML = '<div class="container"><h1>Ticket not found</h1></div>';
        return;
    }
    
    // Update page title
    document.title = `${ticket.id} - Support Dashboard`;
    
    // Render ticket details
    const ticketDetailContainer = document.getElementById('ticket-detail');
    if (ticketDetailContainer) {
        ticketDetailContainer.innerHTML = `
            <div class="ticket-info">
                <div class="info-item">
                    <div class="info-label">Ticket ID</div>
                    <div class="info-value">${ticket.id}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Customer Name</div>
                    <div class="info-value">${ticket.customerName}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Order ID</div>
                    <div class="info-value">${ticket.orderId}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Status</div>
                    <div class="info-value">${formatStatus(ticket.status)}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Created</div>
                    <div class="info-value">${ticket.createdAt}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Priority</div>
                    <div class="info-value">${ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}</div>
                </div>
            </div>
            <div class="message-body">
                <strong>Customer Message:</strong><br>
                ${ticket.message}
            </div>
        `;
    }
}

// Action Button Handlers
function handleRefund() {
    const ticketId = getUrlParameter('id');
    const ticket = getTicketById(ticketId);
    
    if (ticket) {
        console.log(`Refund issued for order ${ticket.orderId}`);
        alert(`Refund has been processed for order ${ticket.orderId}`);
        
        // Visual feedback
        const btn = document.querySelector('.btn-refund');
        const originalText = btn.textContent;
        btn.textContent = 'Refund Processed ✓';
        btn.style.background = '#48bb78';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    }
}

function handleEscalate() {
    const ticketId = getUrlParameter('id');
    const ticket = getTicketById(ticketId);
    
    if (ticket) {
        console.log(`Ticket ${ticketId} escalated to supervisor`);
        alert(`Ticket ${ticketId} has been escalated to a supervisor`);
        
        // Visual feedback
        const btn = document.querySelector('.btn-escalate');
        const originalText = btn.textContent;
        btn.textContent = 'Escalated ✓';
        btn.style.background = '#ed8936';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    }
}

function handleMarkResolved() {
    const ticketId = getUrlParameter('id');
    const ticket = getTicketById(ticketId);
    
    if (ticket) {
        console.log(`Ticket ${ticketId} marked as resolved`);
        alert(`Ticket ${ticketId} has been marked as resolved`);
        
        // Update ticket status in mock data
        ticket.status = 'resolved';
        
        // Visual feedback
        const btn = document.querySelector('.btn-resolved');
        const originalText = btn.textContent;
        btn.textContent = 'Resolved ✓';
        btn.style.background = '#48bb78';
        
        // Update status display
        const statusElements = document.querySelectorAll('.ticket-status');
        statusElements.forEach(el => {
            el.textContent = 'Resolved';
            el.className = 'ticket-status status-resolved';
        });
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    }
}

// Search Order Functionality
function handleOrderSearch() {
    const searchInput = document.getElementById('search-order');
    const searchValue = searchInput.value.trim();
    
    if (searchValue) {
        console.log(`Searching for order: ${searchValue}`);
        
        // Mock search results
        const mockOrderData = {
            orderId: searchValue,
            status: 'Shipped',
            items: ['Blue Cotton Sweater', 'Black Jeans'],
            total: '$89.99',
            shippingAddress: '123 Main St, Anytown, USA'
        };
        
        // Display search results
        let resultsContainer = document.getElementById('search-results');
        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'search-results';
            resultsContainer.style.marginTop = '20px';
            searchInput.parentNode.appendChild(resultsContainer);
        }
        
        resultsContainer.innerHTML = `
            <div style="background: #f0fff4; padding: 15px; border-radius: 8px; border-left: 4px solid #48bb78;">
                <h4 style="color: #2f855a; margin-bottom: 10px;">Order Found: ${mockOrderData.orderId}</h4>
                <p><strong>Status:</strong> ${mockOrderData.status}</p>
                <p><strong>Items:</strong> ${mockOrderData.items.join(', ')}</p>
                <p><strong>Total:</strong> ${mockOrderData.total}</p>
                <p><strong>Shipping:</strong> ${mockOrderData.shippingAddress}</p>
            </div>
        `;
    } else {
        alert('Please enter an order ID to search');
    }
}

// Initialize page functionality based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'login.html':
        case '':
            // Login page initialization
            const loginForm = document.getElementById('login-form');
            if (loginForm) {
                loginForm.addEventListener('submit', handleLogin);
            }
            break;
            
        case 'tickets.html':
            // Tickets list page initialization
            renderTicketsList();
            break;
            
        case 'ticket.html':
            // Ticket detail page initialization
            renderTicketDetail();
            
            // Add event listeners for action buttons
            const refundBtn = document.querySelector('.btn-refund');
            const escalateBtn = document.querySelector('.btn-escalate');
            const resolvedBtn = document.querySelector('.btn-resolved');
            const searchBtn = document.getElementById('search-btn');
            
            if (refundBtn) refundBtn.addEventListener('click', handleRefund);
            if (escalateBtn) escalateBtn.addEventListener('click', handleEscalate);
            if (resolvedBtn) resolvedBtn.addEventListener('click', handleMarkResolved);
            if (searchBtn) searchBtn.addEventListener('click', handleOrderSearch);
            
            // Add enter key support for search
            const searchInput = document.getElementById('search-order');
            if (searchInput) {
                searchInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        handleOrderSearch();
                    }
                });
            }
            break;
    }
});

// Export functions for potential external use
window.SupportDashboard = {
    mockTickets,
    getTicketById,
    handleRefund,
    handleEscalate,
    handleMarkResolved,
    handleOrderSearch
};
