/**
 * Created by alvaro on 12/15/16.
 */
/**
 * Created by alvaro on 12/15/16.
 */

imageModule.service('DummyGoogleImageService', function ($q) {
    this.listPossibleImages = function (keyword) {
        console.log(keyword.length)
        if(keyword.length <=0){
            return $q.reject(new Error("Empty"));
        }
        var defer = $q.defer();
        setTimeout(function () {
            var response = jQuery.parseJSON('[{"type":"image/jpeg","width":200,"height":200,"size":48217,"url":"https://0.academia-photos.com/986956/355070/3337234/s200_eno.ebenso.jpg","thumbnail":{"url":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQB9XfAU0J09KNVK4QkPasOBs5KhDXvADaqjd6vpt2RLWkOkYS3CnmGA","width":104,"height":104}},{"type":"image/png","width":300,"height":300,"size":31444,"url":"http://www.spd-sachsen.de/wp-content/uploads/2014/07/Jusos-Rose.png","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUpHauwdIxFOX1w9tA2DxsLzxd9v9q-WRoPNNZKdL8B2Vb7HfZvthfQ","width":116,"height":116}},{"type":"image/jpeg","width":620,"height":413,"size":56625,"url":"https://static.franks-travelbox.com/d/4/7/e/d47e6c595b54df02de459bcafe7d0ad…iches-erscheinungsbild-auf-wie-die-kathedrale-selbst-brasilien-620x413.jpg","thumbnail":{"url":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwPTx49RMcCJturMS4NBCt0ILdlLRH9f7HUQn6xuJxLUuthBAYNgbgZh_O","width":136,"height":91}},{"type":"image/jpeg","width":640,"height":307,"size":45705,"url":"http://assets.cdn.moviepilot.de/files/bde568e12347cb78775791066a89690c03da6543de5b8873d546acf5991d/limit/640/2000/darksouls3patch.jpg","thumbnail":{"url":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSTNCerA-UU7ohjRVLymumsgkl313t-jqBv6rVzE1MoWX5LoHWPjbfjubg","width":137,"height":66}},{"type":"image/jpeg","width":437,"height":203,"size":17470,"url":"http://www.wiesbaden-akademie.de/wp-content/uploads/job-manager-uploads/company_logo/2016/07/Ebenso-Logo-1.jpg","thumbnail":{"url":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8XxGDTqagqqTd1MLBkGzOq57r3TshsdOMXD3U0V78pLamD8SSoiw4cXs","width":126,"height":59}},{"type":"image/jpeg","width":1300,"height":1011,"size":244476,"url":"http://c8.alamy.com/comp/D1Y120/ob-blond-ob-braun-it-happened-at-worlds-fair-joan-obrien-elvis-presley-D1Y120.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZWRYkyOxqZbWapvrx5V0NbxCvn3Ghhr3J9Ffuq7v6eOdwKQrcoPrjT_T","width":150,"height":117}},{"type":"image/jpeg","width":900,"height":600,"size":382809,"url":"http://4.bp.blogspot.com/-deYFpUrFpss/UE2W4xKjJFI/AAAAAAAAAPE/LWQxO8xugnk/s1600/IMG_3860bk.JPG","thumbnail":{"url":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSL9kJLsYe4vczDi3ixsmTajHXlz9k9iHzmvWZHUXVN9loTeFRCnu-f5w","width":146,"height":97}},{"type":"image/jpeg","width":592,"height":450,"size":12807,"url":"http://www.wotech-technical-media.de/_thumbnails_/29828_4_zvo_dgo_dummy16.jpg?m=1477081312","thumbnail":{"url":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR1OaBSaGkstzwJhcnxt8iRupo-oABdIjheJHyOx1q4TYhupKWGcXwyB7M7","width":135,"height":103}},{"type":"image/gif","width":188,"height":301,"size":8635,"url":"http://2.bp.blogspot.com/-uFGgUwNZbuw/UDSorldZaZI/AAAAAAAAAYA/mbjtadTCBP4/s1600/gummib2.gif","thumbnail":{"url":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_Z4haCLGnHPtEszg2sfdjtnqkssivURwVRMH1ORWG0JZ5lghjOvU6rAw","width":72,"height":116}},{"type":"image/jpeg","width":960,"height":720,"size":69842,"url":"http://images.slideplayer.org/2/854127/slides/slide_1.jpg","thumbnail":{"url":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6CfiRcjJMQ0BCBFeFekXYFIgS-9L7TjvUtehBS4rVZFXKKEZshuS6FZU","width":148,"height":111}}]');
            console.log(response);
            defer.resolve(response);
        }, 2);
        return defer.promise;
    }
});