---
layout: homepage
title: Bouillotte & Culotte
---

<header class="section">
    <div class="container">
        <div class="row justify-content-between">
            <div class="order-2 order-md-1 col-md-6 my-4 my-lg-0 d-flex justify-content-center flex-column">
                <h1 class="heading-title text-center mb-4">T'en as marre de <br/><span class="d-block mx-auto">te tordre de douleur ?</span></h1>
                <p class="text-center mb-4 mb-lg-5">Et si on parlait d'endométriose ?</p>
                <a href="#sect1" class="align-self-center arrow-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-down-circle align-self-center" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                </a>
            </div>
            <div class="order-1 order-md-2 col-12 col-md-5 col-xl-6">
                <img src="{{ "/assets/images/douleurs_homepage.jpg" | relative_url }}" alt="" width="100%" />
            </div>
        </div>
    </div>
</header>

<section id="sect1" class="section">
    <div class="container">
        <h2 class="mb-56"><span>Ensemble apprenons à comprendre cette maladie</span></h2>
        <div class="row d-flex justify-content-between mb-72">
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <img class="w-100" src="{{ "/assets/images/interrogation_homepage.jpg" | relative_url }}" alt="">
            </div>
            <div class="col-12 col-lg-5 d-flex justify-content-center align-items-start flex-column ">
                <h3 class="titre_sommaire_accueil">Que m’arrive t-il ?</h3>
                <p class="card-text">Ici, on t’explique comment fonctionne ton utérus, ton <b>cycle menstruel</b> et l’endométriose. Nous t’avons aussi listé les principaux <b>symptômes</b> de cette maladie.</p>
                <a href="/que-m-arrive-t-il/" class="btn btn-primary">Découvrir les symptômes</a>
            </div>
        </div>
        <div class="row d-flex justify-content-between mb-72">
            <div class="order-1 order-lg-2 col-12 col-lg-6 mb-4 mb-lg-0">
                <img class="w-100" src="{{ "/assets/images/discussion_homepage.png" | relative_url }}" alt="" >
            </div>
            <div class="order-2 order-lg-1 col-12 col-lg-5 d-flex justify-content-center flex-column ">
                <h3 class="titre_sommaire_accueil">Comment en parler ?</h3>
                <p class="card-text">C’est primordial de pouvoir parler de ce qu’on ressent à ses <b>proches</b>. Voici quelques <b>conseils</b> pour expliquer ce qu’il t’arrive et <b>répondre</b> aux questions indiscrètes de certains.</p>
                <a href="/que-m-arrive-t-il/" class="btn btn-primary">Libérer la parole</a>
            </div>
        </div>
        <div class="row d-flex justify-content-between">
            <div class="order-1 col-12 col-lg-6 mb-4 mb-lg-0">
                <img class="w-100" src="{{ "/assets/images/protections_hygieniques_homepage.png" | relative_url }}" alt="" >
            </div>
            <div class="order-2 col-12 col-lg-5 d-flex justify-content-center flex-column ">
                <h3 class="titre_sommaire_accueil">Comment me soulager ?</h3>
                <p class="card-text">Vivre avec une <b>douleur insoutenable</b> est très pesant. On t’a donc préparé une petite liste de spécialistes que tu peux consulter et quelques <b>astuces</b> pour calmer ta douleur.</p>
                <a href="/que-m-arrive-t-il/" class="btn btn-primary">Apaiser mes douleurs</a>
            </div>
        </div>
    </div>
</section>
<section class="section cta-soutien bg-violet">
{% include cta-soutien.html %}
</section>
<section class="section">
    {% include testimonials-endogirls.html %}
</section>