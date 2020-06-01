<template>
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
        <title>Home | Coronabook</title>
        <div class="container">
            <h3 class="text-muted">CoronaBook</h3>
        </div>
            <div class="jumbotron">
                
                <h1 class="display-3 home-jumtron">welcome home!</h1>
                <div class="row">
                    <img src="https://cdn.discordapp.com/attachments/716072757766520854/716690722862006292/logo.png" width="80" height="80"  alt="">
                    <p class="lead home-jumtext">CoronaBook is your one stop shop to donate medical equipment and supplys to docters and frontline workers in need. </p>
                </div>
                <p><router-link class="btn btn-lg btn-success home-jumtron" :to="{ name: 'Signup' }" role="button">Sign up today</router-link></p>
            </div>

            <div class="row">
                <div class="col-lg-6 main-text-area">
                    <h4>Welcome!</h4>
                    <p>Coronabook is a Organization Aimed at helping medical professionals , and other frontline workers get the supplies that they need, in order to be safe. We run off a collection of dedicated volunteers who help us distribute things like masks, food and other supplies to workers and families in need. We are the collective of people that are enabling families to have the ability to stay home and in doors. Aside from medical workers we work with schools to get internet and technology to students in need, so they can have better opportunities and a better education, while they are away from school. We also help develiver things to the vernatube through some of our partner organizations, like the Calgary food bank and meals on wheels.</p>

                    <h4>Volunteer with us</h4>
                    <p>come help with the drop off of supplies, devlopment of the website, and the expansion of our organization</p>
                    <router-link class="btn btn-primary" :to="{ name: 'Volunteer' }">Volunteer</router-link>

                    <h4>Store</h4>
                    <p>everything is free, just make orangements with the "seller" here you can either tade items, let people borrow items or give away items.</p>
                    <router-link class="btn btn-primary" :to="{ name: 'Store' }">Store</router-link>

                </div>

                <div class="col-md-6 main-text-area">
                    <h4>Look at the map</h4>
                    <p>You can find maps of where medical faculties, and other front line operations are, and see what they need!</p>
                    <router-link class="btn btn-primary" :to="{ name: 'Map' }">Map</router-link>

                    <h4>Sign in</h4>
                    <p>Login as a medical worker or as a donator</p>
                    <router-link class="btn btn-primary" :to="{ name: 'Login' }">Sign in</router-link>

                    <h4>Twitter feed</h4>
                    <p>See tweets from people who have suplies to donate</p>
                    <router-link class="btn btn-primary" :to="{ name: 'Tweets' }">Tweets</router-link>
                </div>
                <img class="bottom-img" src="https://cdn.discordapp.com/attachments/716418474586538125/716703850144202762/000.png" width="70%" height="70%" alt="front page PDF">
            </div>
        <footer class="footer">
            <p>© coronabook 2020 - fair use open source </p>
        </footer>
    </div>
</template>

<style scoped>
.bottom-img {
    padding-left: 20%;
}
.main-text-area {
    padding-left: 30px;
}
.home-jumtron {
    margin-left: 85px;
}
.home-jumtext {
    margin-left: 20px;
}
</style>