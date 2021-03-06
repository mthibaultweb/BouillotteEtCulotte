---
layout: default
title: Témoignages
subtitle: Un parcours unique pour chacune
permalink: /temoignages/
parentTitle: Libérer la parole
parentLink: /liberer-la-parole/
---

<!-- <section class="sources section">
    <div class="container">
        <div class="row">
            <h3>Sommaire</h3>
            <ul class="d-flex flex-column justify-content-lg-between flex-lg-row">
                <li><a href="#sect1">Les Endogirls</a></li>
                <li><a href="#sect2">Tous savoir sur l'endométriose</a></li>
            </ul>
        </div>
    </div>
</section> -->
<section id="sect1" class="section">
    <div class="container testimonials-page">
        <h2><span>Les Endogirls</span></h2>
        <div class="row align-items-center">
        {% for item in site.data.testimonials-endogirls %}
            <div class="col-lg-6 justify-content-start">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <figure class="mb-0">
                            <blockquote class="blockquote">
                                <p>{{ item.testimony }}</p>
                            </blockquote>
                            <figcaption class="blockquote-author">
                                <cite title="Source Title">{{ item.name }}, {{ item.age }}, {{ item.status }}</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <svg class="guillemets-haut" width="60" height="47" viewBox="0 0 60 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.913 46.2162C9.85507 46.2162 6.49275 44.8468 3.82609 42.1081C1.27536 39.2553 0 35.4895 0 30.8108C0 20.3123 3.47826 12.0961 10.4348 6.16216C13.4493 3.42343 16.9275 1.36937 20.8696 0L22.6087 4.27927C20.1739 5.07808 17.7391 6.39039 15.3043 8.21621C10.2029 11.982 7.13043 16.9459 6.08696 23.1081L8.34783 21.9099C10.2029 20.997 12.058 20.5405 13.913 20.5405C17.3913 20.5405 20.4058 21.8529 22.9565 24.4775C25.6232 26.988 26.9565 29.955 26.9565 33.3784C26.9565 36.8018 25.6232 39.8258 22.9565 42.4505C20.4058 44.961 17.3913 46.2162 13.913 46.2162ZM46.9565 46.2162C42.8985 46.2162 39.5362 44.8468 36.8696 42.1081C34.3188 39.2553 33.0435 35.4895 33.0435 30.8108C33.0435 20.3123 36.5217 12.0961 43.4783 6.16216C46.3768 3.42343 49.8551 1.36937 53.913 0L55.6522 4.27927C53.2174 5.07808 50.7826 6.39039 48.3478 8.21621C43.2464 11.982 40.1739 16.9459 39.1304 23.1081L41.3913 21.9099C43.2464 20.997 45.1014 20.5405 46.9565 20.5405C50.4348 20.5405 53.4493 21.8529 56 24.4775C58.6667 26.988 60 29.955 60 33.3784C60 36.8018 58.6667 39.8258 56 42.4505C53.4493 44.961 50.4348 46.2162 46.9565 46.2162Z" {%if page.url == "/devenir-un-allie/"%}fill="#9101A9"{%else%}fill="#ec58a3"{%endif%}/>
                    </svg> 
                </div>
            </div>
        {% endfor %} 
        </div> 
    </div>
</section>
<section id="sect2" class="section">
    <div class="container">
        <h2><span>Tous savoir sur l’endométriose</span></h2>
        <div class="row d-flex justify-content-between mb-72">
            <div class="order-1 order-lg-2 col-12 col-lg-6 mb-4 mb-lg-0">
                <img class="w-100" src="{{ "/assets/images/content/quoi.jpg" | relative_url }}" alt="" >
            </div>
            <div class="order-2 order-lg-1 col-12 col-lg-5 d-flex justify-content-center align-items-start flex-column ">
                <h3 class="titre_sommaire_accueil">Que m’arrive-t-il ?</h3>
                <p class="card-text">Connaitre ce qu’il se passe dans son corps quand on est une endogirl est aussi très important pour <b>comprendre ses douleurs</b>. Apprends tout sur ton cycle et ton endo ci-dessous.</p>
                <a href="/comprendre-la-maladie/" class="btn btn-primary">Comprendre la maladie</a>
            </div>
        </div>
    </div>
</section>
