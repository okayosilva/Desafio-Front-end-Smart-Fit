import { BannerInfo } from './bannerInfo'

import requiredMask from '../../assets/images/png/required-mask.png'
import recommendedMask from '../../assets/images/png/recommended-mask.png'

import requiredTowel from '../../assets/images/png/required-towel.png'
import recommendedTowel from '../../assets/images/png/recommended-towel.png'

import forbiddenFountain from '../../assets/images/png/not_allowed-fountain.png'
import partialFountain from '../../assets/images/png/partial-fountain.png'

import requiredLockerroom from '../../assets/images/png/allowed-lockerroom.png'
import partialLockerroom from '../../assets/images/png/partial-lockerroom.png'
import forbiddenLockerroom from '../../assets/images/png/closed-lockerroom.png'

export function Banner() {
  return (
    <BannerInfo.Root>
      <BannerInfo.BannerArea>
        <BannerInfo.Title>Máscara</BannerInfo.Title>
        <BannerInfo.Grid>
          <BannerInfo.BannerInfoArea>
            <BannerInfo.BannerImage
              src={requiredMask}
              alt="Necessário uso de Máscara"
            />
            <BannerInfo.Status>Obrigatório</BannerInfo.Status>
          </BannerInfo.BannerInfoArea>
          <BannerInfo.BannerInfoArea>
            <BannerInfo.BannerImage
              src={recommendedMask}
              alt="Recomendado uso de mascara"
            />
            <BannerInfo.Status>Recomendado</BannerInfo.Status>
          </BannerInfo.BannerInfoArea>
        </BannerInfo.Grid>
      </BannerInfo.BannerArea>

      <BannerInfo.BannerArea>
        <BannerInfo.Title>Toalha</BannerInfo.Title>
        <BannerInfo.Grid>
          <BannerInfo.BannerInfoArea>
            <BannerInfo.BannerImage
              src={requiredTowel}
              alt="Necessário uso de toalha"
            />
            <BannerInfo.Status>Obrigatório</BannerInfo.Status>
          </BannerInfo.BannerInfoArea>
          <BannerInfo.BannerInfoArea>
            <BannerInfo.BannerImage
              src={recommendedTowel}
              alt="Recomendado uso de toalha"
            />
            <BannerInfo.Status>Recomendado</BannerInfo.Status>
          </BannerInfo.BannerInfoArea>
        </BannerInfo.Grid>
      </BannerInfo.BannerArea>

      <BannerInfo.BannerArea>
        <BannerInfo.Title>Bebedouro</BannerInfo.Title>
        <BannerInfo.Grid>
          <BannerInfo.BannerInfoArea>
            <BannerInfo.BannerImage
              src={partialFountain}
              alt="Parcial uso de garrafa"
            />
            <BannerInfo.Status>Parcial</BannerInfo.Status>
          </BannerInfo.BannerInfoArea>
          <BannerInfo.BannerInfoArea>
            <BannerInfo.BannerImage
              src={forbiddenFountain}
              alt="Proibido uso de garrafa"
            />
            <BannerInfo.Status>Proibido</BannerInfo.Status>
          </BannerInfo.BannerInfoArea>
        </BannerInfo.Grid>
      </BannerInfo.BannerArea>

      <BannerInfo.BannerArea>
        <BannerInfo.Title>Vestiários</BannerInfo.Title>
        <BannerInfo.Grid>
          <BannerInfo.BannerInfoArea>
            <BannerInfo.BannerImage
              src={requiredLockerroom}
              alt="Vestiário liberado"
            />
            <BannerInfo.Status>Liberado</BannerInfo.Status>
          </BannerInfo.BannerInfoArea>
          <BannerInfo.BannerInfoArea>
            <BannerInfo.BannerImage
              src={partialLockerroom}
              alt="Vestiário parcial"
            />
            <BannerInfo.Status>Parcial</BannerInfo.Status>
          </BannerInfo.BannerInfoArea>

          <BannerInfo.BannerInfoArea>
            <BannerInfo.BannerImage
              src={forbiddenLockerroom}
              alt="Vestiário fechado"
            />
            <BannerInfo.Status>Fechado</BannerInfo.Status>
          </BannerInfo.BannerInfoArea>
        </BannerInfo.Grid>
      </BannerInfo.BannerArea>
    </BannerInfo.Root>
  )
}
