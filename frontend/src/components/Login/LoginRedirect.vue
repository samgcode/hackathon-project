<template>
    <div>
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Login | Coronabook</title>
        </div>
        <div>
            <p class="side-space">Please choose which category you fall under :</p>
            <router-link class="btn btn-primary" :to="{ name: 'OthersLogin' }"><i class="fa fa-home"></i> Household or Other</router-link>
            <router-link class="btn btn-secondary" :to="{ name: 'HospitalLogin' }"><i class="fa fa-medkit"></i> Hospitals and Pharmacies</router-link>
        </div>
    </div>
</template>

<style scoped>

.side-space {
    margin-left: 10px;
}

.btn {
  background-color: DodgerBlue; 
  border: none;
  color: white;
  padding: 12px 16px;
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;
}

.btn:hover {
  background-color: RoyalBlue;
}

</style>