---
layout: homepage
title: Bouillotte & Culotte
---

<header>
    <div class="container">
        <div class="row justify-content-space-between">
            <div class="order-2 order-lg-1 col-lg-6 my-4 pt-lg-4 d-flex justify-content-center flex-column">
                <h1 class="heading-title text-center mb-4">T'en as marre de <br/><span>te tordre de douleur ?</span></h1>
                <p class="text-center mb-4 mb-lg-5">Et si on parlait d'endométriose ?</p>
                <a href="#sect1" class="align-self-center arrow-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-down-circle align-self-center" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                </a>
            </div>
            <div class="order-1 order-lg-2 col-12 col-lg-6 my-4 pt-lg-4">
                <img src="{{ "/assets/images/douleurs_homepage.jpg" | relative_url }}" alt="" width="100%" />
            </div>
        </div>
    </div>
</header>

<section id="sect1" class="section">
    <div class="container">
        <div class="mb-5 mt-4 mt-lg-5">
            <h2><span>Ensemble apprenons à comprendre cette maladie</span></h2>
            <div class="row d-flex justify-content-between mt-75 mb-75">
                <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                    <img class="w-100" src="{{ "/assets/images/interrogation_homepage.jpg" | relative_url }}" alt="">
                </div>
                <div class="col-12 col-lg-5 d-flex justify-content-center align-items-start flex-column ">
                    <h3 class="titre_sommaire_accueil">Que m’arrive t-il ?</h3>
                    <p class="card-text">Ici, on t’explique comment fonctionne ton utérus, ton cycle menstruel et l’endométriose. Nous t’avons aussi listé les principaux symptômes de cette maladie.</p>
                    <a href="/que-m-arrive-t-il/" class="btn btn-primary btn-sm">Découvrir les symptômes</a>
                </div>
            </div>
            <div class="row d-flex justify-content-between mb-75">
                <div class="order-1 order-lg-2 col-12 col-lg-6 mb-4 mb-lg-0">
                    <img class="w-100" src="{{ "/assets/images/discussion_homepage.png" | relative_url }}" alt="" >
                </div>
                <div class="order-2 order-lg-1 col-12 col-lg-5 d-flex justify-content-center flex-column ">
                    <h3 class="titre_sommaire_accueil">Comment en parler ?</h3>
                    <p class="card-text">C’est primordial de pouvoir parler de ce qu’on ressent à ses proches. Voici quelques conseils pour expliquer ce qu’il t’arrive et répondre aux questions indiscrètes de certains.</p>
                    <a href="/que-m-arrive-t-il/" class="btn btn-primary btn-sm">Libérer la parole</a>
                </div>
            </div>
            <div class="row d-flex justify-content-between mb-75">
                <div class="order-1 col-12 col-lg-6 mb-4 mb-lg-0">
                    <img class="w-100" src="{{ "/assets/images/protections_hygieniques_homepage.png" | relative_url }}" alt="" >
                </div>
                <div class="order-2 col-12 col-lg-5 d-flex justify-content-center flex-column ">
                    <h3 class="titre_sommaire_accueil">Comment me soulager ?</h3>
                    <p class="card-text">Vivre avec une douleur insoutenable est très pesant. On t’a donc préparé une petite liste de spécialistes que tu peux consulter et quelques astuces pour calmer ta douleur.</p>
                    <a href="/que-m-arrive-t-il/" class="btn btn-primary btn-sm">Apaiser mes douleurs</a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="cta-soutien">
    <div class="container">
        <div class="row d-flex justify-content-between">
            <div class="order-1 order-lg-2 col-12 col-lg-6 mb-4 mb-lg-0">
                <img class="w-100" src="{{ "/assets/images/soutien_homepage.png" | relative_url }}" alt="" >
            </div>
            <div class="order-2 order-lg-1 col-12 col-lg-5 d-flex justify-content-center flex-column pb-4">
                <h2 class=" mb-4 mb-lg-5"><span>Accompagner une endogirl</span></h2>
                <h3 class="titre_sommaire_accueil">Comment soutenir ?</h3>
                <p class="card-text">Si tu veux savoir comment aider l’une de tes proches qui est atteinte d’endométriose, alors tu es au bon endroit. </p>
                <a href="/que-m-arrive-t-il/" class="btn btn-primary btn-sm">Devenir un allié</a>
            </div>
        </div>
    </div>
</section>
<section class="mt-125 mb-100">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8">
                <h2 class="mb-4"><span>Elles partagent leur expériences</span></h2>
                <p class="col-lg-10 mt-75 mb-5">Tu souhaites <b>connaître l’expérience</b> des femmes concernées ? Tu aimerais savoir si tu n’es <b>pas la seule</b> dans cette situation ? Tu aimerais te sentir comprise ? Des femmes ont accepté de <b>témoigner pour partager</b> leurs expériences et leurs ressentis.</p>
            </div>
        </div>
    </div>
    {% include testimonials-endogirls.html %}
</section>

    

