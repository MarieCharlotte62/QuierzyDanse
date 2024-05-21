<?php

namespace App\Entity;

use App\Repository\DisciplineRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DisciplineRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['groups' => 'discipline:item']),
        new GetCollection(normalizationContext: ['groups' => 'discipline:list'])
    ],
    paginationEnabled: false,
)]

class Discipline
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['discipline:list', 'discipline:item'])]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    #[Groups(['discipline:list', 'discipline:item'])]
    private ?string $nom_discipline = null;

    #[ORM\OneToMany(targetEntity: Horaire::class, mappedBy: 'horaire_discipline')]
    #[Groups(['discipline:list', 'discipline:item'])]
    private Collection $horaires_discipline;

    public function __construct()
    {
        $this->horaires_discipline = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomDiscipline(): ?string
    {
        return $this->nom_discipline;
    }

    public function setNomDiscipline(string $nom_discipline): static
    {
        $this->nom_discipline = $nom_discipline;

        return $this;
    }

    /**
     * @return Collection<int, Horaire>
     */
    public function getHorairesDiscipline(): Collection
    {
        return $this->horaires_discipline;
    }

    public function addHorairesDiscipline(Horaire $horairesDiscipline): static
    {
        if (!$this->horaires_discipline->contains($horairesDiscipline)) {
            $this->horaires_discipline->add($horairesDiscipline);
            $horairesDiscipline->setHoraireDiscipline($this);
        }

        return $this;
    }

    public function removeHorairesDiscipline(Horaire $horairesDiscipline): static
    {
        if ($this->horaires_discipline->removeElement($horairesDiscipline)) {
            // set the owning side to null (unless already changed)
            if ($horairesDiscipline->getHoraireDiscipline() === $this) {
                $horairesDiscipline->setHoraireDiscipline(null);
            }
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->getNomDiscipline();
    }
}
