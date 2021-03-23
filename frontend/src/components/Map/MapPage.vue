<template>
    <div>
      <div class="jumbotron">
        <div class="container">
        <h1 class="display-3">welcome to maps!</h1>
        <h3>Hospitals and Pharmacies in Calgary</h3>
        <h5> Find the resources near you!</h5>
        <p>The locations that are pinpointed show the different locations that have uploaded their stocked material. Use this to guide you to find hospitals or pharmacies that are of most convenience to your choice of distribution, pick up, or drop off.  </p>
        <p>Don’t see your institution here please sign up and make sure to check off that you are part of Hospitals and Pharmacies.
            As listed from highest to lowest each graph shows the amount of the specific material in each given location at the current time. 
            If you would like to edit or add the information about the number of supplies in your database, please login in to your account. 
            Use this to guide you to where you might want to donate, give, or take materials from. 
            The materials that are present in our database are:
            (this has the current example data)
            <br>
            1. Masks
            <br>
            2. Syringes
            <br>
            3. Wheelchairs 
            <br>
            4. Needles
            <br>
            see the graph page that is linked for more accurate stats
        </p>
        </div>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1AJZL7FUbtjqBlrKj_cAIEGoJlbaMGKyq"></iframe>
      </div>
    </div>
</template>

<style scoped>
html, body { 
    margin: 0; 
    padding: 0; 
    height: 100%; 
}
#bar {
    height: 12px; 
    background: red; 
}
iframe {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    border: none; padding-top: 495px;
    box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box;
}
</style>