<template>
    <div>
        <section class="jumbotron text-center">
            <div class="container">
            <h1>Online Donations</h1>
            <p class="lead text-muted">We understand that during the COVID-19 crisis there are many battles that need to be fought and that is why we have created this platform to provide people with materials all while trying to reduce human interaction. This is a safe place, where any interactions are anonymous. If you have any items that you don't use and would like to donate them please upload them in the forum box, and soon someone will notify you when someone would like to pick up. If you are facing financial struggles you can use this platform to browse for free items that others no longer need all while maintaining your privacy. Once you find the one you would like, click the chat button beside the image and chat with the donator. </p>
            <p>
                <a href="#" class="btn btn-primary my-2">Donate Items</a>
                <a href="#" class="btn btn-secondary my-2">Get some Items</a>
            </p>
            <p>Since donations centers have been closed it has become hard to distribute and share items to those who are in need or are unable to purchase items such as clothing or furniture. We want to provide a place where the distribution of donations can still happen as well reduce the spread of corona through less human contact.</p>
            <p>as well reduce the spread of corona through less human contact.
                This system will provide some help to those in economic struggle to get back on their feet and not worry about what they have to pay when it comes to items. This will also increase their wellbeing and their mental health as this will relieve stress and add some joy into their life. 
            </p>
            <img src="https://cdn.discordapp.com/attachments/716066847765561396/716730871155261450/my-visual_47005980.png" width="80%" height="800%" alt="inspire-donate">
            <p> if you would like to donate a item</p>
            <p>  If you have any items that you don't use and would like to donate them please upload them in the forum box, and soon someone will notify you when someonewould like to pick up. (with social distancing of course)</p>
            <p>if you are in need of a item</p>
            <p> If you are facing financial struggles you can use this platform to browse for free items that others no longer need all while maintaining your privacy. Once you find the one you would like, click the chat button beside the image and chat with the donator.  </p>
            <img src="https://cdn.discordapp.com/attachments/716066847765561396/716730919368654888/my-visual_47005507.png" width="100%" height="100%" alt="want-item-info-store">
            <img src="https://cdn.discordapp.com/attachments/716072757766520854/716715949343899668/my-visual_47005507-2.png" width="100%" height="100%" alt="donate-info-store">
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">

                    <div class="col-md-4 product-card">
                    <div class="card mb-4 shadow-sm">
                        <img :src="''+getImage('couch')" width="100%" height="225" >
                        <div class="card-body">
                        <p class="card-text">User345: Old couch, got a new one and dont need it anymore.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Contact User345</button>
                            </div>
                            <small class="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 product-card">
                    <div class="card mb-4 shadow-sm">
                        <img :src="''+getImage('laptop')" width="100%" height="225">
                        <div class="card-body">
                        <p class="card-text">User96: Laptop bought in 2012, just dont need it so im okay with giving it to anyone.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Contact User95</button>
                            </div>
                            <small class="text-muted">40 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4 product-card">
                    <div class="card mb-4 shadow-sm">
                        <img :src="''+getImage('shoes')" width="100%" height="225">
                        <div class="card-body">
                        <p class="card-text">User3204: Never worn these shoes, willing to give them to anyone.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Contact User3204</button>
                            </div>
                            <small class="text-muted">6 hours</small>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 product-card">
                    <div class="card mb-4 shadow-sm">
                        <img :src="''+getImage('shirt')" width="100%" height="225">
                        <div class="card-body">
                        <p class="card-text">User306: Hey! This is a shirt that I got a while back but I just dont use it anymore. It's in good condition and willing to give it to anyone.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Contact User306</button>
                            </div>
                            <small class="text-muted">4 days</small>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 product-card">
                    <div class="card mb-4 shadow-sm">
                        <img :src="''+getImage('jacket')" width="100%" height="225" >
                        <div class="card-body">
                        <p class="card-text">User4: Brand New Jacket! Never worn and does not fit me. Willing to give it to anyone, just need it off of me.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Contact User4</button>
                            </div>
                            <small class="text-muted">1 min</small>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 product-card">
                    <div class="card mb-4 shadow-sm">
                        <img :src="''+getImage('iphone')" width="100%" height="225" >
                        <div class="card-body">
                        <p class="card-text">User2432:I had this iphone for 4 years and got a new one, wanna give back to the community so willing to give it to anyone.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Contact User2432</button>
                            </div>
                            <small class="text-muted">30 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 product-card">
                    <div class="card mb-4 shadow-sm">
                        <img :src="''+getImage('blackshoes')" width="100%" height="225">
                        <div class="card-body">
                        <p class="card-text">User43: Had these shoes for a while but very slightly worn. Size 12 in mens and willing to drop them off</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Contact User43 </button>
                            </div>
                            <small class="text-muted">3 days</small>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 product-card">
                    <div class="card mb-4 shadow-sm">
                        <img :src="''+getImage('blueshirt')" width = "100%" height="225">
                        <div class="card-body">
                        <p class="card-text">User324:Shirt I got in a comp but dont wear, size XL.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Contact User324:</button>
                            </div>
                            <small class="text-muted">46 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 product-card">
                    <div class="card mb-4 shadow-sm">
                    <img :src="''+getImage('pants')" width = "100%" height="225">
                        <div class="card-body">
                        <p class="card-text">User320: Size M, worn it a lot but havent worn it since 1 year ago. Really comfortable and soft as it keeps you warm during the winter.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Contact User320</button>
                            </div>
                            <small class="text-muted">2 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            <img class="bottom-img" src="https://cdn.discordapp.com/attachments/716072757766520854/716727478390882332/my-visual_47006446.png" width="80%" height="80%" alt="end-reasons-to-donate">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getImage: function(imageName) {
            var images = require.context('@/assets/', false, /\.jpg$/);
            return images('./' + imageName + ".jpg");
        },
    }
}
</script>

<style scoped>
.bottom-img {
    padding-left: 20%;
}
</style>