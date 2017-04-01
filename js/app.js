var app = new Vue({
  el: '#app',
  data: {
    linkedin: 'https://www.linkedin.com/in/craigocurtis/',
    github: 'https://github.com/craig-o-curtis',
    stackoverflow: 'http://stackoverflow.com/users/6090533/craig-o-curtis',
    plunker: 'https://plnkr.co/users/craig-o-curtis',
    projects: [
        {
            title: 'Realizing the Dream of Building a World-Class Military Force',
            imgurl: './translations/world-class-military/world-class-military.jpg',
            gist: 'A look at China\'s military build-up, and the 20th-century language that is still very real today.',
            translink: './translations/world-class-military/index.html',
            origlink: 'http://it.jfdaily.com/guonei/bw/201611/t20161127_2541710.html'
        },
        {
            title: 'Nanotech Breakthrough - Spinach Mine Detectors',
            imgurl: './translations/spinach-mine-detectors/spinach-mine-detectors.jpg',
            gist: 'An interesting use of spinach and nanotechnology.',
            translink: './translations/spinach-mine-detectors/index.html',
            origlink: 'http://www.bbc.com/zhongwen/simp/science/2016/10/161031_plants_detect'
        }
    ]
  }
});