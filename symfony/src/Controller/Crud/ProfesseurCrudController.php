<?php

namespace App\Controller\Crud;

use App\Entity\Professeur;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ProfesseurCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Professeur::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', "Liste des professeurs")
            ->setSearchFields(null)
            ->setHelp('edit', 'Une image de 500px de largeur sur 500px de hauteur est recommandée');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('prenom')->setSortable(false),
            TextField::new('presentation')->setSortable(false),
            ImageField::new('nom_photo')->setBasePath('/images/professeurs')->setSortable(false)->onlyOnIndex(),
            TextField::new('imageFile')->setFormType(VichImageType::class)->setSortable(false)->hideOnIndex(),
        ];
    }
}
