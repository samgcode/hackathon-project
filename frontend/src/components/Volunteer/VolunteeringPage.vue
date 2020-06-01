<template>
    <div> 
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-3">Volunteering</h1>
                <p>
                Thank you for visiting! We are glad you are interested in volunteering! Look below to get started
                </p>
                <p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a>
                </p>
            </div>

            <div class="container">
                <!-- row of columns -->
                <div class="row">
                <div class="col-md-4">
                    <h2>Get Involved</h2>
                    <p>Thank you for visiting our website. You can help us and others in many different ways. To learn more press the button below.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                    <img src="https://cdn.discordapp.com/attachments/716072757766520854/716349015658332160/download.jpg" alt="bottem pic">
                </div>
                <div class="col-md-4">
                    <h2>Donate</h2>
                    <p> check out who needs supplies on the maps page -- link this back to the page with the forms </p>
                    <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                    <img src="https://cdn.discordapp.com/attachments/716072757766520854/716350013671735406/clipart-maps-6.png" alt="maps page pic" width="175" height="100">
                </div>
                <div class="col-md-4">
                    <h2>Driving Volunteer</h2>
                    <p>would you like to help pickup and drop off materials? click here</p>
                    <p><router-link class="btn btn-secondary" :to="{ name: 'DrivingVolunteer' }" role="button">View details »</router-link></p>
                    <img src="https://cdn.discordapp.com/attachments/716072757766520854/716352086345777252/112048421-stock-vector-car-symbol-icon-black-2d-isolated-vector-illustration.jpg" alt="driving pic" width="200" height="150">
                </div>
            </div>
            <hr>
        </div>
            <footer class="footer">
                <div class="container">
                    <span class="text-muted">copyright and links and stuff </span>
                </div>
            </footer>
        </div>
    </div>
</template>