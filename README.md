# nekos-best-api
This app takes a random image from a random artist and shows it on the screen every time you reload the page
or you press the randomize image button, it has a button that allows to store the image we like
to an album.

# Download this repository and run it.
> git clone https://github.com/jDaviDEV/nekos-best-api.git.
> cd nekos-best-api/neko-api.
> npm install.
> npm run dev.

# How it works?
There is a customHook called useFetch() that makes a fetch request to the url: "https://nekos.best/api/v2/" with a random category that could be
"neko" or "husbando" (the url should look like this "https://nekos.best/api/v2/neko)")
and then it return an object containing this:
{
  "results": [
    {
      "artist_name": "ダイバー",
      "artist_href": "https://twitter.com/divergenceok",
      "source_url": "https://twitter.com/divergenceok/status/1462019899207733249",
      "url": "https://nekos.best/api/v2/neko/2ebf59cf-1196-443f-b15b-1fd3ebdbf83b.png"
    }
  ]
}
so we access to the value of "url" and send it to an img hmtl tag

# Api documentation
You can learn more about this api in the next link: [Handlebars templates](https://docs.nekos.best/index.html)
