<template>
    <div>
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
            <title>Tweets | Coronabook</title>
        </div>
        <div class="jumbotron text-center">
        <p class="lead"><u>See tweets from people who have suplies to donate</u></p>
        </div>
            <div class='sk-ww-twitter-hashtag-feed' data-embed-id='41127'></div>
    </div>
</template>


   <script>
    export default {
      name: 'App',
      data () {
        return {
          appId: 19607,
          position: 'bottomLeft'
        }
      },
      mounted () {
        this.scriptContents()
      },
      methods: {
        scriptContents () {
          window.productHuntUpcoming = {
            appId: this.appId,
            position: this.position || 'bottomLeft'
          }; (function (doc, scr, src, a, b) {
            a = doc.createElement(scr)
            b = doc.getElementsByTagName(scr)[0]
            a.async = true
            a.src = src
            b.parentNode.insertBefore(a, b)
          })(
            document,
            'script',
            'https://www.sociablekit.com/app/embed/twitter-hashtag-feed/widget.js'
          )
        }
      }
    }
    </script>