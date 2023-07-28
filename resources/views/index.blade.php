<!DOCTYPE html>
<html class="black" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>

    <script src="{{ asset('node_modules/tinymce/tinymce.js') }}"></script>
    <script>
        tinymce.init({
            selector:'textarea.description',
            width: 900,
            height: 300
        });
        </script> 
    <!-- Scripts -->

    @vite(['resources/css/app.css'])
</head>

<body>
    <div id="root"  className="container bg-white dark:bg-black"></div>
    @viteReactRefresh
    @vite(['resources/js/main.tsx'])
</body>

</html>
