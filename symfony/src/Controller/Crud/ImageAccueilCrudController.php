<?php

namespace App\Controller\Crud;

use App\Entity\ImageAccueil;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;

class ImageAccueilCrudController extends AbstractCrudController
{

    public static function getEntityFqcn(): string
    {
        return ImageAccueil::class;
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->remove(Crud::PAGE_INDEX, Action::NEW)
            ->remove(Crud::PAGE_INDEX, Action::DELETE)
            ->remove(Crud::PAGE_EDIT, Action::SAVE_AND_CONTINUE)
            ->update(Crud::PAGE_INDEX, Action::EDIT, function (Action $modifierImage) {
                return $modifierImage->setLabel("Modifier l'image");
            });
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', "Votre image d'accueil")
            ->setPageTitle(Crud::PAGE_EDIT, "Modifier mon image d'acceuil")
            ->setSearchFields(null)
            ->setHelp('edit', 'Une image de 800px de largeur sur 500px de hauteur est recommandée');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            // TextField::new('nom_image')->setSortable(false)->onlyOnIndex(),
            ImageField::new('nom_image')->setBasePath('/images/accueil')->setSortable(false)->onlyOnIndex(),
            TextField::new('imageFile')->setFormType(VichImageType::class)->onlyWhenUpdating(),
        ];
    }

    public function configureAssets(Assets $assets): Assets
    {
        return $assets
            ->addCssFile('css/imageAccueil.css');
    }
}
