<template>
    <div>
      <form class="col-sm-6 form-center">
        <div class="form-group">
          <label for="itemName">Item</label>
          <select class="form-control" id="itemName">
            <option>masks</option>
            <option>gloves</option>
            <option>hand sanitizer</option>
            <option>Face shields</option>
          </select>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="quantity">Item quantity</label>
            <input type="text" class="form-control" id="quantity" placeholder="item quantity">
          </div>
          <div class="form-group col-md-6">
            <label for="location">Location</label>
            <input type="text" class="form-control" id="location" placeholder="location">
          </div>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="addedRemovedRadio" id="removed" value="removed" checked>
          <label class="form-check-label" for="removed">
            removed
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="addedRemovedRadio" id="added" value="added">
          <label class="form-check-label" for="added">
            added
          </label>
        </div>
        <button type="submit" class="btn btn-primary submit-btn">Submit</button>
      </form>
    </div>
</template>