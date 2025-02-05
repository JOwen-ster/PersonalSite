<script>
    import { page } from "$app/state";
    let symbol = '> ';
</script>

<style>
    /* Header */
    .main-window-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
    }

    /* Close, Minimize, Maximize Buttons */
    .main-window-buttons {
        display: flex;
        gap: 5px;
    }

    .circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .green { background-color: #4CAF50; }
    .yellow { background-color: #FFC107; }
    .red { background-color: #F44336; }
</style>

<div class="main-window-header">

    <!--PageTitle-->
    {symbol + page.data.pageTitle}
    <!--If page is About, show scrolling images of my languages-->
    <!--If page is Projects, show project grid-->

    <div class="main-window-buttons">
        <div class="circle green"></div>
        <div class="circle yellow"></div>
        <div class="circle red"></div>
    </div>
</div>