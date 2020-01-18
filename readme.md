#project structure
+ controllers: business code cho api routes
+ database: định nghĩa model database
+ init: function chạy khi start server
    * Kết nối database
    * Khai báo biến global
+ middlewares: middleware của api
+ shared:
    * lib: function nội bộ
    * services: function với bên thứ 
    * utils: những function nhỏ như randomString, encode,decode
+ server.js: code chính để chạy
