<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SCPD | Admin & Tracking Hub</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
</head>
<body>

    <div class="deped-badge">
        <p>Official Website</p>
        <a href="https://www.deped.gov.ph" target="_blank">DepEd Philippines</a>
    </div>

    <header class="hero-header">
        <div class="header-main">
            <h1>Special Curricular Programs Division</h1>
            <p class="subtitle">Admin Stuffs | Internal Portal</p>
            <div id="clock-container">
                <span id="live-clock"></span>
            </div>
        </div>
    </header>

    <div class="main-wrapper">
        
        <section class="hub-section">
            <div class="search-container">
                <div class="search-box">
                    <input type="text" id="searchInput" placeholder="Search Google or ask Gemini AI...">
                    <button id="googleSearchBtn" onclick="executeSearch('google')">🔍 Google</button>
                    <button id="geminiSearchBtn" onclick="executeSearch('gemini')">✨ Gemini</button>
                </div>
            </div>
        </section>

        <section class="hub-section">
            <h2 class="hub-title">2026 Tracking Databases</h2>
            <div class="dashboard-grid">
                
                <a href="https://depedph-my.sharepoint.com/:x:/r/personal/bcd_od_deped_gov_ph/_layouts/15/Doc.aspx?sourcedoc=%7BF96ED7EF-1621-4935-A163-BFA08BE7D9C5%7D&file=2026%20BCD%20Tracking%20Database.xlsx&fromShare=true&action=default&mobileredirect=true" target="_blank" class="glass-card" onclick="celebrate()">
                    <div class="card-icon">📊</div>
                    <h3>BCD Tracking</h3>
                    <p>Bureau of Curriculum Development Database</p>
                </a>

                <a href="https://docs.google.com/spreadsheets/d/1vAVL107HlHFZnWqYG3Fki7cRvhxzmt2jTc8lAF-tono/edit?gid=0#gid=0" target="_blank" class="glass-card" onclick="celebrate()">
                    <div class="card-icon">📝</div>
                    <h3>SCPD Google Sheet</h3>
                    <p>Core Programs Tracking</p>
                </a>

                <a href="https://docs.google.com/spreadsheets/d/1z1-OSaXym8wjPL9s7eYWLh_Bv3Er-AhPqRg1z5Tsn-w/edit?gid=0#gid=0" target="_blank" class="glass-card" onclick="celebrate()">
                    <div class="card-icon">⏱️</div>
                    <h3>SCPD DTR Tracker</h3>
                    <p>Daily Time Record Tracking</p>
                </a>

                <a href="https://planner.cloud.microsoft/webui/plan/7PPmgl4pLkqVklpTJ1nlnMgAE0dQ/view/board?tid=40e3ab80-2024-45a3-bf76-7a0761a24d29" target="_blank" class="glass-card" onclick="celebrate()">
                    <div class="card-icon">📂</div>
                    <h3>Document Tracking</h3>
                    <p>Planner & Document Workflow Hub</p>
                </a>

                <a href="https://docs.google.com/spreadsheets/d/1m-NrTsGSJarjQlOyTPv0_TbeRX5sOTciuBEYgjNU7R8/edit?gid=699651425#gid=699651425" target="_blank" class="glass-card" onclick="celebrate()">
                    <div class="card-icon">📅</div>
                    <h3>SCPD Calendar</h3>
                    <p>Schedules & Deadlines</p>
                </a>

                <a href="https://depedph-my.sharepoint.com/my?id=%2Fpersonal%2Fcarlo%5Fveloso%5Fdeped%5Fgov%5Fph%2FDocuments%2F2026%20SCPD%20FILING&viewid=b2dda901%2Da52c%2D481f%2Db05d%2D75f1b13a7815" target="_blank" class="glass-card highlight-card" onclick="celebrate()">
                    <div class="card-icon">☁️</div>
                    <h3>SCPD Online Filing</h3>
                    <p>Cloud Storage & Digital Archives</p>
                </a>

            </div>
        </section>

        <section class="hub-section">
            <h2 class="hub-title">Administrative Tasks</h2>
            <div class="task-container">
                <div class="task-input">
                    <input type="text" id="taskInput" placeholder="Enter new admin task...">
                    <button onclick="addTask()">Add</button>
                </div>
                <ul id="taskList"></ul>
            </div>
        </section>

        <section class="hub-section">
            <h2 class="hub-title">Division Personnel</h2>
            <div class="personnel-grid">
                <div class="person-card"><strong>Miko Adrianne Puno</strong><br><span>Technical Assistant II</span><br><small>miko.puno@deped.gov.ph</small></div>
                <div class="person-card"><strong>Michael De Vera</strong><br><span>Administrative Support II</span><br><small>michael.devera007@deped.gov.ph</small></div>
                <div class="person-card"><strong>Danica Shan Torrecampo</strong><br><span>Administrative Support I</span><br><small>danicashan.torrecampo@deped.gov.ph</small></div>
                <div class="person-card"><strong>Rovic Sam Corpuz</strong><br><span>Administrative Support I</span><br><small>rovic.corpuz@deped.gov.ph</small></div>
                <div class="person-card"><strong>Carlo Angelo Veloso</strong><br><span>Administrative Assistant II</span><br><small>carlo.veloso@deped.gov.ph</small></div>
            </div>
        </section>

        <section class="hub-section">
            <h2 class="hub-title">Division Calendar</h2>
            <div class="calendar-container">
                <iframe src="https://calendar.google.com/calendar/embed?src=en.philippines%23holiday%40group.v.calendar.google.com&ctz=Asia%2FManila" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
            </section>

    </div>

    <script src="script
