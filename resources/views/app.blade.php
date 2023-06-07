<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
<link rel="shortcut icon" type="image/x-icon"
    href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Seal_of_Madiun_Regency.svg/1200px-Seal_of_Madiun_Regency.svg.png">
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>

    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>
<body>
    @inertia

</body>
</html>