<?php

namespace App\Controller\Crud;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;

class UserCrudController extends AbstractCrudController
{

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureActions(Actions $actions): Actions
    {
        $changementMdpAction = Action::new('changementMdp', 'Changer mon mot de passe')
            ->linkToRoute('app_forgot_password_request')
            ->setHtmlAttributes(['target' => '_blank']);

        $changementEmailAction = Action::new('changementEmail', 'Changer mon adresse email')
            ->linkToCrudAction('edit');

        return $actions
            ->add(Crud::PAGE_INDEX, $changementMdpAction)
            ->add(Crud::PAGE_INDEX, $changementEmailAction)
            ->remove(Crud::PAGE_INDEX, Action::EDIT)
            ->remove(Crud::PAGE_INDEX, Action::NEW)
            ->remove(Crud::PAGE_INDEX, Action::DELETE)
            ->remove(Crud::PAGE_EDIT, Action::SAVE_AND_CONTINUE);
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', "Mes informations personnelles")
            ->setPageTitle(Crud::PAGE_EDIT, 'Modifier mon adresse email')
            ->setSearchFields(null);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('nom')->setSortable(false)->hideOnForm(),
            TextField::new('prenom')->setSortable(false)->hideOnForm(),
            TextField::new('email')->setSortable(false),
            TextField::new('password', 'Mot de passe')->setSortable(false)->hideOnForm()
                ->formatValue(function ($value) {
                    return '********';
                })
        ];
    }
}
