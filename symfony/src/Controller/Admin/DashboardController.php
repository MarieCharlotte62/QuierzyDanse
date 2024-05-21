<?php

namespace App\Controller\Admin;

use App\Entity\Horaire;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\ImageAccueil;
use App\Entity\Professeur;
use App\Entity\User;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]

    public function index(): Response
    {
        return $this->render('admin/dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Club de danse de Quierzy');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::section('GESTION DU SITE');
        yield MenuItem::linkToCrud("modifier l'image d'accueil", "fa fa-image", ImageAccueil::class);
        yield MenuItem::linkToCrud("modifier les horaires", "fa fa-clock", Horaire::class);
        yield MenuItem::linkToCrud("modifier les professeurs", "fa fa-user", Professeur::class);

        yield MenuItem::section('ESPACE PERSONNEL');
        yield MenuItem::linkToCrud("mon compte", "fa fa-cog", User::class);
    }
}
