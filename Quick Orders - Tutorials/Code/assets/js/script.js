const tutorials = [
    {
        id: 1,
        title: 'Customer_01: Download The App',
        steps: [
            '',
            '<h4>This tutorial explains how to download the application in case you did not have it.</h4>',
            '',
            '1. First, navigate to the <b>Google Play</b> or <b>App Store</b>.',
            '2. Search for the term <b>"QuickOrder"</b> App and click <b>install</b>.',
            '',
            '',
            ' -> For Android Users:',
            'You will find the application under the name "QuickOrder" by <b>"Thamer Obeidat"</b> in the <b>Google Play Store</b>.',
            '',
            ' -> For Apple Users:',
            'You will find the application under the name "Quick Orders" by <b>"ARRIS IT"</b> in the <b>Apple Store</b>.',
            '',
            '',
            'Congratulations! You now have the Application!'
        ],
        videoTitle: 'How to download the app',
        videoUrl: "assets/Videos/Edited/Download-App.mp4"
    },
    {
        id: 2,
        title: 'Customer_02: Setup Pharmacy Account',
        steps: [
            '',
            '<h4>This tutorial explains how to register and create your pharmacy account.</h4>',
            '',
            '1. With your Android or Apple Mobile, Open the Quick Orders App.',
            '2. If you already <u>have an account</u> use your login credentials to login normally, otherwise, click <b>Sign Up</b> to create a new account.',
            '3. When you reach the sign up portal, you will be requested to provide your <b>phone number</b>. <u>Make sure it is a valid number</u>.',
            '4. Once you register with your phone number, you will be requested to provide the system with the <b><u>information about your pharmacy</u></b> that is necessary to validate that your pharmacy is a real entity.',

            '<h5>#Privacy Notice: Please note that your data is completely protected under the data privacy law. Please read the privacy policy carefully before proceeding.</h5>',

            '5. You will be prompted to provide your pharmacy and responsible pharmacist names in both <b>arabic</b> and <b>english</b> and in <b>accurate format</b>.',
            '6. For your pharmacy profile, you are free to choose your <b>username</b>, your <b>email</b>, and your <b>password</b>.',
            '',
            '',
            '7. In this final page, you will be prompted to upload a few <u><b>legal documents</u></b> to prove your legitimacy as a pharmacy.',
            'This includes:',
            '',
            '- <b>Certificate_1</b>: <b>Practicing the Profession of Responsible Pharmacist</b>',
            '<h5 style: "">This will require both sides of the document to be uploaded.</h5>',
            '',
            '- <b>Certificate_2</b>: <b>Profession License</b>',
            '',
            '- <b>Certificate_3</b>: <b>Commercial Record</b>',
            '',
            '- <b>Certificate_4</b>: <b>Identity of the Responsible Pharmacist</b>',
            '<h5>This will require both sides of the document to be uploaded.</h5>',
            '',
            '8. After submitting your data, <b><u>your request will be handled by the admins</u></b> to verify your information. Shortly after, if your information is correct, you will be able to login to your account normally using the mobile number and the password you chose earlier.',
            'Congratulations! Wou have successfully created your Pharmacy account!'
        ],
        videoTitle: 'Setup Pharmacy Account',
        videoUrl: 'assets/Videos/Edited/Create-Pharma-Account.mp4'
    },
    {
        id: 3,
        title: 'Customer_03: Order & Review',
        steps: [
            '',
            '<h4>This tutorial explains how you can start ordering and how to review or cancel your orders.</h4>',
            '',
            '1. If you are not already logged in, use your credentials to do so.',
            '2. This will take you to the shopping portal homepage. You can start navigating the items you need directly, or you may click on the search to look for a specific product.',
            '3. Once you choose an item, select the quantity you would like to purchase, then head down to view your total price.',
            '4. Once you add an item to the cart, you can either navigate back to buy more products, or you can view your cart and checkout.',
            '5. If you have a promotion code, please enter it for a discount.',
            '6. Once you check that your order information is correct, you will be able to choose how you want to order.',
            '7. Only choose the representative option if you already have a representative you are ordering through.',
            '8. Finally, if you have any special notes, mention them with your order, and click on submit order.',
            '9. Once you place your order, you will be taken to the Tracking page of the order. You will receive updates on the status of your order regularly.',
            '10. If you wanted to view all your orders, navigate to the Orders section in the sidebar of the app.',
            '11. There, you will find all your active orders, as well as the past orders.',
            '12. You may only cancel your order before it has been confirmed by the supplier. If the order has been confirmed, you may only View and Track your Order.',
            '13. Cancelling your order will move it to the past orders section.',
            '14. Congratulations. Now you should be able to order and review your orders easily!'
        ],
        videoTitle: 'How To Order & Review',
        videoUrl: 'assets/Videos/Edited/Order-And-Review.mp4'
    },
    {
        id: 4,
        title: 'Supplier_01: Subscribe & Explore The App',
        steps: [
            '',
            '<h4>This tutorial explains how you can subscibe to the app and explore its main sections and components.</h4>',
            '',
            'NOTE: If you are a supplier, please always make sure you are in the Supplier Portal, Not the admin portal.',
            '',
            '1. For the QuickOrders subscription as a Supplier or Drugstore, you first need to contact us via the online form.',
            '2. After sending us your information, we will reach out to you to make sure your request and entity is valid.',
            '3. We will process the information shortly and send you your account credentials.',
            '4. Use those credentials to login and control your QuickOrders Dashboard freely.',
            '5. Make sure that you are typing the credentials in the Supplier Portal, not in the Admin Portal.',

            '6. After loggin in, you will be redirected to the main page of your dashboard.',
            '7. The page is divided into three sections.',
            '7.1 The Main Area, which will contain most of the interactive information.',
            '7.2 The Sidebar, which will contain the Navigation Elements of the portal.',
            '7.3 The Navbar, which will show the profile, your orders, and the notifications.',

            '8. The main dashboard contains basic statistics about the orders and earnings.',
            '9. The Product Section of the Sidebar contains options to Add Products or List All your Products.',
            '10. The Order Section lists all your received orders from the customers. That can be categorized based on the orders status for easier management.',
            '11. The Deliveryman Section lists the available Delivery Men as well as give the option to Register new ones.',
            '12. The Employees Section lists the available Employees as well as give the option to Register new ones.',
            '13. The Messages section shows the conversations you may have with the customers.',
        ],
        videoTitle: 'Tutorial 4 Video',
        videoUrl: 'assets/Videos/Edited/Subscribe+Navigate.mp4'
    },
    {
        id: 5,
        title: 'Supplier_02: Product Database Setup',
        steps: [
            '',
            '<h4>This tutorial explains how you can setup and populate your supplier database with your products.</h4>',
            '',
            '1. To add a product in your database, navigate to Add New Product page, amd start filling your product information.',
            '2. Once you are done with the product information, please insert the quantity of your product that qualifies for a bonus.',
            '3. Click submit when you are done, to add the product to your database.',
            '4. You can view all your product database when you choose list from the product section.',
            '5. You may at any time delete or modify any product you like by choosing the settings button on the right.',
            '6. The modification process is fairly the same as the adding process, as you will be prompted to modify the fields you need and click submit.',
            '7. You may delete any item at any time using the delete button on the right.',
        ],
        videoTitle: 'Product Database Setup',
        videoUrl: 'assets/Videos/Edited/Product-Database.mp4'
    },
    {
        id: 6,
        title: 'Supplier_03: Order Review & Modification',
        steps: [
            '',
            '<h4>This tutorial explains how you can view your customer orders, modify them, and update their information.</h4>',
            '',
            '1. To list the received orders from your customers, choose one of the Order Categories in the Categories section.',
            '2. In the right side, you will have the settings button which includes options for Viewing the order information, editing the order, or viewing the order invoice.',
            '3. The order edits you may choose include the Pricing, The Quantity, and the Bonus fields.',
            '4. To modify the status of the order in terms of delivery, payment, or status, you may click on the View button or the Order ID',
            '5. The changes you may need to update include changing the delivery man, adding a reference code, changing the payment status, or changing the order status.',
            'Please note that any changes you perform will be notified to the customer at any point.',
            '6. On the right side, you will find the legal certificates and contact information of the client pharmacy.',
        ],
        videoTitle: 'Order Review & Modification',
        videoUrl: 'assets/Videos/Edited/Order-Control.mp4'
    },
    {
        id: 7,
        title: 'Supplier_04: Employees & Delivery Setup',
        steps: [
            '',
            '<h4>This tutorial explains how you can setup your personnel including deliverymen and employees.</h4>',
            '',
            '1. To list your available deliverymen, choose list from the deliverymen section.',
            '2. For the Deliveryman section, you may add as many Deliverymen as you need by choosing register.',
            '3. Be careful with providing accurate details to avoid delivery issues and conflicts.',

            '4. The process of adding, viewing, or editing deliverymen is fairly the same for the Employees section.',
            '5. You will be requested to enter the accurate employee information in case you wanted to add new ones.',
            '6. One key difference is that you may activate or deactivate your employees based on their current status.',

            '7. Finally, you can view your conversations with your customers at any time and reach out for their needs directly in the app for accessibility and ease of use.',

            'Congratulations! you are now able to navigate your supplier account fully and easily!'
        ],
        videoTitle: 'Employees & Delivery Setup',
        videoUrl: 'assets/Videos/Edited/Employees.mp4'
    }
    // Add more tutorials as needed
];

// Call this function after defining `tutorialData`
generateSidebar();

// Function to load the tutorial
function loadTutorial(tutorialId) {
    const homeContent = document.getElementById('home-content');
    const tutorialContent = document.getElementById('tutorial-content');
    const totalTutorials = tutorials.length;

    // Find the tutorial data based on the ID
    const tutorial = tutorials.find(t => t.id === tutorialId);

    if (tutorial) {
        // Hide the home content and show the tutorial content
        homeContent.style.display = 'none';
        tutorialContent.style.display = 'flex';

        // Build the HTML for the selected tutorial
        const stepsHtml = tutorial.steps.map(step => `<p>${step}</p>`).join('');

        // Create navigation buttons based on the tutorial index
        const backButtonDisabled = tutorialId === 1; // Disable for first tutorial
        const nextButtonDisabled = tutorialId === totalTutorials; // Disable for last tutorial

        tutorialContent.innerHTML = `
            <div class="navigation-bar">
                <button id="back-button" ${backButtonDisabled ? 'disabled' : ''}>Previous Tutorial</button>
                <button id="next-button" ${nextButtonDisabled ? 'disabled' : ''}>Next Tutorial</button>
            </div>
            
            <container style="display: flex; height: 75vh; width: 100%; flex-direction: row; padding: 0px 20px; gap: 10px;">
                <div class="text-tile">
                    <h2>${tutorial.title}</h2>
                    ${stepsHtml}
                </div>
                <div class="video-tile">
                    <h2>${tutorial.videoTitle}</h2>
                    <iframe src="${tutorial.videoUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            

        `;

        // Add event listeners for navigation buttons
        document.getElementById('back-button').addEventListener('click', () => {
            loadTutorial(tutorialId - 1);
        });

        document.getElementById('next-button').addEventListener('click', () => {
            loadTutorial(tutorialId + 1);
        });
    } else if (tutorialId === 0) {
        // Display home content for the home page case
        homeContent.style.display = 'flex';
        tutorialContent.style.display = 'none';
    }

    // Set active state for the clicked sidebar item
    setActiveSidebar(tutorialId);
}


// Function to set active class on sidebar items
function setActiveSidebar(tutorialId) {
    // Select all sidebar items
    const sidebarItems = document.querySelectorAll('.sidebar li');

    // Remove 'active' class from all items
    sidebarItems.forEach(i => i.classList.remove('active'));

    // Add 'active' class to the corresponding item based on tutorialId
    if (tutorialId > 0 && tutorialId <= sidebarItems.length) {
        sidebarItems[tutorialId - 1].classList.add('active'); // Adjust index as needed
    }
}

// Function to set up event listeners for sidebar items on page load
function setupSidebarListeners() {
    const sidebarItems = document.querySelectorAll('.sidebar li');

    sidebarItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            loadTutorial(index + 1); // Call loadTutorial with the correct ID
        });
    });
}

// Call setupSidebarListeners when the document is ready
document.addEventListener('DOMContentLoaded', setupSidebarListeners);


function generateSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '<ul>'; // Reset the sidebar content

    tutorials.forEach((tutorial, index) => {
        sidebar.innerHTML += `<li onclick="loadTutorial(${index+1})">${tutorial.title}</li>`;
    });

    sidebar.innerHTML += '</ul>';
}



