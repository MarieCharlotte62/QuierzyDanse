<?php

namespace App\Controller\Crud;

use App\Entity\Horaire;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TimeField;

class HoraireCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Horaire::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('horaire_discipline')
                ->setLabel('Discipline'),
            AssociationField::new('horaire_groupe')
                ->setLabel('Groupe'),
            TextField::new('details'),
            TextField::new('jour'),
            TimeField::new('heure_debut'),
            TimeField::new('heure_fin'),
        ];
    }
}
