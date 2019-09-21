var enemyDataArr = [
  {
    "name": "나이트 칙",
    "img": "NightChick",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 견제 사격",
        "img": "ARShot",
        "range": 3,
        "description": "머신건 견제 사격으로 <span id='askillpower1'></span> 피해를 줍니다. 일정 확률로 2라운드 동안 대상의 회피를 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "머신건 연사",
        "img": "ARShot",
        "range": 2,
        "description": "머신건을 조준 사격해 <span id='askillpower2'></span> 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정조준",
        "img": "Snipe",
        "range": 0,
        "description": "대기 시, 적을 조준해 2라운드 동안 적중과 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "나이트 칙 실더",
    "img": "NightChickS",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 내려치기",
        "img": "MeleeAttack",
        "range": 2,
        "description": "방패로 내리쳐 <span id='askillpower1'></span> 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 방패 방어술",
        "img": "SelfDefBuff",
        "range": 6,
        "description": "방패를 올려 3라운드 동안 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 커버링",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "라운드 개시 시, 칙 방패 방어술이 적용된 상태면 바로 뒤에 있는 아군 1기를 보호합니다.",
        "areadata": [
          6
        ]
      }
    ]
  },
  {
    "name": "나이트 칙 런처",
    "img": "NightChickM",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "미사일 공격",
        "img": "Missile",
        "range": 2,
        "description": "미사일을 발사해 <span id='askillpower1'></span> 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "미사일 집중 공격",
        "img": "Missile",
        "range": 1,
        "description": "미사일 근접 사격으로 <span id='askillpower2'></span> 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "목표 록온",
        "img": "Snipe",
        "range": 0,
        "description": "대기 시, 주변의 적을 록온해 2라운드 동안 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "나이트 칙 디텍터",
    "img": "NightChickDE",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 포착",
        "img": "ARShot",
        "range": 4,
        "description": "목표를 공격 대상으로 지정해 <span id='askillpower1'></span> 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "섬광 탄막",
        "img": "Beam",
        "range": 4,
        "description": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "레이더 공유",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리외 적중률이 증가합니다.",
        "areadata": [
          2,
          4,
          6,
          8
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "레이더 재밍",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "description": "자신이 사망하는 경우, 주변 철충의 센서에 오류를 일으킵니다. 오류가 일어난 대상들은 적중이 크게 감소하며, 적중 강화 효과가 해제됩니다.",
        "areadata": [
          2,
          4,
          6,
          8
        ]
      }
    ]
  },
  {
    "name": "나이트 칙 디텍터 G",
    "img": "NightChickDE",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "지면 교란 파장",
        "img": "TeamDefDeBuff",
        "range": 5,
        "description": "교란 파장을 발산해 <span id='askillpower1'></span> 보호 무시 피해를 주고, 3라운드 동안 표식 / 받는 피해 증가 / 적중 / 회피 감소 효과를 줍니다. 스킬 사용 시, 회피가 증가합니다. 기동형 적에게는 효과가 없습니다.",
        "areadata": [
          2,4,5,6,8
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "개량형 섬광탄",
        "img": "Beam",
        "range": 4,
        "description": "지정 범위에 섬광탄을 발사해 <span id='askillpower2'></span> 피해를 주고, 대상의 AP를 감소시키며 적중 / 치명타 증가 효과를 해제합니다. 적중한 대상은 2라운드 동안 적중과 치명타가 감소합니다.",
        "areadata": [
          2,4,5,6,8
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정밀 지상 레이더",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "인접 아군들에게 보호막 / 피해 감소 무시 효과와 대 경장 / 중장형 피해 증가 효과를 부여합니다.",
        "areadata": [
          1,2,3,4,6,7,8,9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "정보 발신 오류",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "자신이 침수 상태로 라운드 개시 시, 오류가 발생해 아군의 적중 / 치명타 / 행동력이 감소합니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      }
    ]
  },
  {
    "name": "스카우트",
    "img": "Scout",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격 미사일",
        "img": "Missile",
        "range": 2,
        "description": "충격 미사일을 발사해 <span id='askillpower1'></span> 피해를 주며, 일정 확률로 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 보고",
        "img": "SelfSpdBuff",
        "range": 6,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "하베스터",
    "img": "Harvester",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 분쇄",
        "img": "MeleeAttack",
        "range": 1,
        "description": "근접 공격으로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 일정 확률로 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수거",
        "img": "Hang",
        "range": 4,
        "description": "집게로 목표 대상을 포획해 <span id='askillpower2'></span> 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 일정 확률로 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "나이트 칙 캐논",
    "img": "NightChickC",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플레임 버너",
        "img": "WideFireShot",
        "range": 2,
        "description": "화염 방사로 <span id='askillpower1'></span> 화염 속성 피해를 주며, 일정 확률로 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "곡사포",
        "img": "CannonShotDelay",
        "range": 5,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 <span id='askillpower2'></span>의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 유폭",
        "img": "SuiceideBomb",
        "range": 0,
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
        "areadata": [
          2,
          4,
          5,
          6,
          8
        ]
      }
    ]
  },
  {
    "name": "칙 스나이퍼",
    "img": "NightChickSP",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정조준 저격",
        "img": "Snipe",
        "range": 4,
        "description": "보호 효과를 무시하는 저격으로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 이동 불가 상태면 정밀 사격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "위장",
        "img": "SelfSpdBuff",
        "range": 6,
        "description": "위장 파장을 발산해 3라운드 동안 회피 / 치명타가 증가하며 받는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대응 저격",
        "img": "DefCounter",
        "range": 0,
        "description": "라운드 개시 시, 위장 상태인 경우 반격을 활성화합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "케미컬 칙",
    "img": "NightChickCM",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화학탄 발사",
        "img": "Missile",
        "range": 4,
        "description": "화학 탄두를 발사해 <span id='askillpower1'></span> 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "화학탄 난사",
        "img": "MultiMissile",
        "range": 2,
        "description": "화학 탄두를 난사해 지정 범위에 <span id='askillpower2'></span> 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          2,
          5,
          8
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "적응 시스템",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
        "areadata": [
          2,
          4,
          5,
          6,
          8
        ]
      }
    ]
  },
  {
    "name": "저거너트",
    "img": "Juggernaut",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 펀치",
        "img": "MeleeAttack",
        "range": 1,
        "description": "대상을 강타해 <span id='askillpower1'></span> 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "몸통 박치기",
        "img": "AssaultAttack",
        "range": 2,
        "description": "대상에게 돌진해 <span id='askillpower2'></span> 피해를 주고, 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방벽 전환",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "아군이 사망한 경우, 방어 태세로 전환해 2라운드 동안 행 보호와 열 보호 효과를 활성화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방어 프로토콜",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "피격시, 일정 확률로 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "레기온",
    "img": "Legion",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "GAU 미니건",
        "img": "ARShot",
        "range": 4,
        "description": "미니건을 발사해 <span id='askillpower1'></span> 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "점착탄",
        "img": "SlowShot",
        "range": 4,
        "description": "점착탄을 던져 <span id='askillpower2'></span> 피해를 줍니다.  적중한 대상을 2라운드 동안 이동 불가 상태로 만들고, 일정 확률로 회피 / 행동력을 감소 시킵니다. 해당 감소 효과는 강화 효과를 해제하고 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 태세",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "아군이 처치되면 경계 태세로 전환해, 양 옆의 아군의 행동력을 감소시키며 대상의 공격을 지원합니다.",
        "areadata": [
          2,
          8
        ]
      }
    ]
  },
  {
    "name": "재퍼",
    "img": "Zapper",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전격 방사",
        "img": "Shock",
        "range": 3,
        "description": "전격을 방사해 <span id='askillpower1'></span> 전기 속성 피해를 주고 일정 확률로 대상의 회피와 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "고압 전류",
        "img": "Shock",
        "range": 1,
        "description": "고압 전류로 <span id='askillpower2'></span> 전기 속성 피해를 주고, 일정 확률로 대상을 행동 불능 상태로 만들고 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 모드",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "적과 인접하거나 공격당하기 전까지 경계 상태로 대기합니다. 해당 상태에선 받는 피해와 행동력이 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "팔랑스",
    "img": "Phalangites",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 속사",
        "img": "ARShot",
        "range": 4,
        "description": "머신건을 발사해 <span id='askillpower1'></span> 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대열 방어",
        "img": "TeamDefBuff",
        "range": 6,
        "description": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "밀집 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          2,
          8
        ]
      }
    ]
  },
  {
    "name": "테스투도",
    "img": "Testudo",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "무장 파괴",
        "img": "ARShot",
        "range": 4,
        "description": "대상에게 <span id='askillpower1'></span> 피해를 주고, 일정 확률로 3라운드 동안 공격력 / 치명타 / 적중을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "진형 사수",
        "img": "DefCounter",
        "range": 6,
        "description": "3라운드 동안 방어막 / 행 보호가 적용되며 받는 피해가 감소합니다. 해당 상태에서 공격받으면 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방진 전개",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "전투 개시 시 열 보호 효과가 적용되며, 3라운드 동안 범위 내 아군이 받는 피해가 크게 감소합니다.",
        "areadata": [
          2,3,5,6,8,9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "출력 오버로드",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "아군이 처치될 때마다 방어력이 증가합니다. 아군이 5기 이상 처치되면 공격 능력이 대폭 증가하며, 방어막과 피해 감소 효과를 무시하지만 지속 고정 피해를 입습니다. 해당 상태에서 처치될 경우, <방진 전개> 범위 안에 있는 아군에게 괴멸적인 고정 피해를 줍니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "센츄리온",
    "img": "Centurion",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 유탄 발사기",
        "img": "GrenadeAttack_2",
        "range": 4,
        "description": "유탄을 발사해 목표 행에 <span id='askillpower1'></span> 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 개시",
        "img": "Snipe",
        "range": 5,
        "description": "2라운드 동안 대상을 목표로 지정해 <span id='askillpower2'></span> 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "반격 태세",
        "img": "DefCounter",
        "range": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다. 공격력과 치명타 증가 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "매머드",
    "img": "Mammoth",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "직사 포격",
        "img": "CannonShotWide",
        "range": 2,
        "description": "직사 포격으로 목표 대상이 있는 열에 <span id='askillpower1'></span> 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          2,
          5,
          8
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "2연장 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "description": "1라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 <span id='askillpower2'></span> 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고폭 충격탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "공격 시, 적의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "와습",
    "img": "Wasp",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화염 방사",
        "img": "WideFireShot",
        "range": 3,
        "description": "화염 방사로 대상에게 <span id='askillpower1'></span> 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 일정 확률로 대상을 점화 상태로 만들어 3라운드 동안 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 돌격",
        "img": "SuiceideBomb",
        "range": 6,
        "description": "공격 대상에게 자폭해 <span id='askillpower2'></span> 피해를 줍니다. 대상의 방어력을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "회피 기동",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력과 적중이 감소합니다. 해당 효과는 최대 3번까지 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "스캐럽",
    "img": "Scarab",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "실드 돌격",
        "img": "AssaultAttack",
        "range": 3,
        "description": "대상에게 돌격해 <span id='askillpower1'></span> 피해를 주고, 대상의 행 보호 효과와 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "보호 기동",
        "img": "SelfDefBuff",
        "range": 6,
        "description": "3라운드 동안 지정한 아군을 보호하고 행동력을 올려줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방어 기동",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "HP가 50% 이하가 되면 방어 기동을 실행해, 받는 피해가 감소하고 방어력이 증가하며 회피가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "아쿠아 칙",
    "img": "NightChickAQ",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "액체 분사",
        "img": "BeamShot",
        "range": 4,
        "description": "지정 범위에 <span id='askillpower1'></span> 냉기 속성 피해를 줍니다. 적중 대상은 침수 상태가 됩니다.",
        "areadata": [
          4,5,6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "재 정비 프로토콜",
        "img": "TeamDefBuff",
        "range": 6,
        "description": "지정 범위의 아군을 재 정비해, 해로운 효과를 해제하며 AP / 적중 / 효과 저항을 올려줍니다.",
        "areadata": [
          2,4,5,6,8
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방수 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "냉기 / 효과 저항이 증가하며, 받는 피해가 감소합니다. 침수 상태인 경우, 제어를 상실해 회피 / 행동력이 크게 증가하지만 적중이 크게 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "누수",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "처치될 경우, 범위 내에 있는 대상들을 침수 상태로 만들며 행동력과 AP를 감소시킵니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      }
    ]
  },
  {
    "name": "썬더 칙",
    "img": "NightChickTD",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 샷",
        "img": "Shock",
        "range": 4,
        "description": "지정 대상에게 <span id='askillpower1'></span> 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피 / 전기 저항이 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 일정 확률로 행동 불가가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일렉트릭 쇼크",
        "img": "WideLightning",
        "range": 1,
        "description": "지정 범위에 <span id='askillpower2'></span> 보호 무시 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피가 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 받는 피해 감소 상태를 해제합니다.",
        "areadata": [
          4,5,6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "과충전",
        "img": "Shock",
        "range": 0,
        "description": "전기 속성 공격을 맞을 경우, 과충전 상태가 되어 공격력 / 적중 / 회피 / AP / 행동력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방전",
        "img": "Shock",
        "range": 0,
        "description": "공격 시, 자신이 침수 상태인 경우 방전으로 인한 고정 피해를 입습니다. 침수 상태로 처치될 경우, 범위 내 대상들에게 전기 피해를 줍니다. 해당 효과기 적용되는 대상이 침수 상태인 경우, 행동 불가가 됩니다.",
        "areadata": [
          2,4,5,6,8
        ]
      }
    ]
  },
  {
    "name": "칠러",
    "img": "Chiller",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "동결 가스",
        "img": "BeamShot",
        "range": 3,
        "description": "지정 범위에 <span id='askillpower1'></span> 냉기 속성 피해를 주고 대상을 이동 불가 상태로 만듭니다. 대상이 침수 상태인 경우, 행동 불가 / 받는 피해 증가 상태로 만들고 강화 효과를 해제합니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "빙결 코팅",
        "img": "TeamDefBuff",
        "range": 6,
        "description": "지정 아군과 자신에게 방어막을 부여하며, 방어력 증가 / 받는 피해와 화염 저항 감소 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "급속 냉각",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "자신이 침수 상태로 라운드 개시 시, 공격력 / 회피 / 행동력이 크게 증가하며 최소 피해만 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과열",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "description": "화염 속성 공격을 맞는 경우, 공격력 / 방어력 / 회피 / 행동력이 크게 감소하며 피해 최소화 상태가 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "경비용 폴른",
    "img": "Fallen",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 사격",
        "img": "MGShot",
        "range": 4,
        "description": "머신건을 발사해 목표 적에게 <span id='askillpower1'></span>의 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대 장갑 진동탄",
        "img": "SelfDefDeBuff",
        "range": 4,
        "description": "대 장갑 진동탄을 발사해 <span id='askillpower2'></span> 피해를 주고, 목표 대상의 방어력을 낮춥니다. 대상에게 피해 감소 효과가 있는 경우, 해당 효과를 무효화합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "폴른 커스텀",
    "img": "FallenC",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개조 머신건",
        "img": "MGShot",
        "range": 4,
        "description": "머신건 사격으로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 경장형이거나 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "진동 분쇄탄",
        "img": "SelfDefDeBuff",
        "range": 4,
        "description": "진동 분쇄탄으로 지정 범위에 <span id='askillpower2'></span> 피해를 주고, 방어력 증가와 받는 피해 감소 효과를 해제합니다. 대상이 방어력 감소 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          4,5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "출력 한계 해제",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "적을 공격할 때마다 공격력과 행동력이 증가하지만 적중이 감소하며, 지속 물리 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과출력 유폭",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "<출력 증폭>이 3중첩 이상인 상태에서 사망 시, 주변에 고정 피해를 주며 강화 효과를 해제합니다.",
        "areadata": [
          2,4,6,8
        ]
      }
    ]
  },
  {
    "name": "경비용 펍 헤드",
    "img": "PuppHead",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "테이저 발사",
        "img": "Shock",
        "range": 2,
        "description": "목표 적을 감전시켜 <span id='askillpower1'></span>의 전기 속성 피해를 주고 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "체포 사슬",
        "img": "Hang",
        "range": 4,
        "description": "목표 대상을 체포해 <span id='askillpower2'></span> 피해를 주면서 최대 2칸까지 앞으로 당기고, 3라운드 동안 이동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "펍 헤드 커스텀",
    "img": "PuppHeadC",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "고전압 스턴 건",
        "img": "Shock",
        "range": 3,
        "description": "대상에게 <span id='askillpower1'></span> 전기 속성 피해를 주고, AP / 회피 / 행동력를 낮춥니다. 대상이 경장 / 중장형인 경우, 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "침입자 포획",
        "img": "Hang",
        "range": 4,
        "description": "적중 대상을 앞으로 당겨 이동 불가 상태로 만들며, 높은 확률로 대상에게 걸린 강화 효과를 해제합니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연산 병렬처리",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "인접 아군들의 연산을 보조해, 전투 개시 시 대상들의 AP / 치명타 / 행동력 / 효과 저항을 높입니다.",
        "areadata": [
          1,2,3,4,6,7,8,9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "네트워트 오류",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "description": "사망 시, 2라운드 동안 인접한 아군들의 적중과 사거리가 크게 감소합니다.",
        "areadata": [
          1,2,3,4,6,7,8,9
        ]
      }
    ]
  },
  {
    "name": "경비용 램파트",
    "img": "Rampart",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 견제",
        "img": "ARShot",
        "range": 3,
        "description": "위협 사격으로 <span id='askillpower1'></span> 피해를 주고, 2라운드 동안 대상의 공격력과 적중을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "목표 호위",
        "img": "ShieldWall",
        "range": 6,
        "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 AP를 증가시킵니다. 해당 스킬 사용 시, 자신이 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "램파트 커스텀",
    "img": "RampartC",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개조 기총 견제",
        "img": "ARShot",
        "range": 4,
        "description": "견제 사격으로 대상에게 <span id='askillpower1'></span> 피해를 주고, 2라운드 동안 공격력 / 치명타 / 적중 / 행동력을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "요격 태세",
        "img": "DefCounter",
        "range": 6,
        "description": "3라운드 동안 방어력이 증가하며 받는 피해가 감소합니다. 열 보호가 활성화되며, 해당 상태에서 공격받으면 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전열 방어 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "자신이 전열에 있는 상태로 라운드 개시 시, 범위 내 아군을 지정 대상 보호하며 대상의 AP를 증가시킵니다.",
        "areadata": [
          2,6,8
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "긴급 지원 요청",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "라운드 개시 시 자신의 HP가 25% 이하인 경우, 아군 공격기에게 지원을 요청해 대상의 AP / 공격력 / 행동력을 증가시킵니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      }
    ]
  },
  {
    "name": "경비용 드론",
    "img": "Drone",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격파 미사일",
        "img": "Missile",
        "range": 3,
        "description": "충격파 미사일을 발사해 <span id='askillpower1'></span> 피해를 주고, 대상을 뒤로 1칸 밀어내며 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "정밀 스캔",
        "img": "Scan",
        "range": 1,
        "description": "목표 지점에 있는 대상들의 약점을 분석해, 3라운드 동안 받는 피해를 증가시키며 효과 저항과 회피를 감소시킵니다.",
        "areadata": [
          2,
          5,
          8
        ]
      }
    ]
  },
  {
    "name": "드론 커스텀",
    "img": "DroneC",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폭뢰 발사",
        "img": "Missile",
        "range": 3,
        "description": "폭뢰를 발사해 <span id='askillpower1'></span> 화염 속성 피해를 줍니다. 치명타 시, 추가 화염 피해를 주며 대상이 경장형 / 중장형인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "지상 분석 레이더",
        "img": "Scan",
        "range": 5,
        "description": "경장형 / 중장형 적을 분석해 3라운드 동안 대상의 공격력 / 방어력 / 치명타 / 적중 / 회피를 낮춥니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다. 기동형 적에게는 효과가 없습니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방어 대열 지원",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "자신이 지정 대상 보호를 받고 있는 상태에서 아군 사망 시, 아군 보호기의 공격을 지원하며 대상의 AP를 상승시킵니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "핀 포인트 폭격",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "자신이 전열인 경우, 방어막 / 피해 감소 효과를 무시하며 방어 관통이 크게 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "경비용 AMG-11",
    "img": "AMG11",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 경보",
        "img": "ARShot",
        "range": 5,
        "description": "대상을 표식 설정하며 <span id='askillpower1'></span> 피해를 줍니다. 3라운드 동안 대상은 받는 피해가 증가하며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "지원 개시",
        "img": "SelfAtkBuff",
        "range": 6,
        "description": "3라운드 동안 지정한 아군의 공격을 지원하며, 대상의 행동력을 높입니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "대공용 AMG-11",
    "img": "AMG11AA",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "회피 견제 사격",
        "img": "ARShot",
        "range": 5,
        "description": "기총 사격으로 <span id='askillpower1'></span> 피해를 주고, 대상을 표식으로 설정해 회피를 낮추고 받는 피해를 증가시킵니다. 회피 감소 효과는 기동형에게 2배로 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대공 기총 난사",
        "img": "WideBeamShot",
        "range": 3,
        "description": "기총을 난사해 <span id='askillpower2'></span> 피해를 주고, 대상들의 회피를 낮춥니다. 대상이 기동형인 경우 피해량이 증가하고, 회피 감소 효과가 2배로 적용되며 회피 증가 효과를 해제합니다.",
        "areadata": [
          1,4,5,7
        ]
      },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "대공 레이더 시스템",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 인접 아군의 적중 / 치명타 / 대 기동형 피해량을 증가시킵니다.",
      "areadata": [
        1,2,3,4,6,7,8,9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "목표 설정 오류",
      "img": "TeamAtkDeBuff",
      "range": 0,
      "description": "사망 시, 2라운드 동안 인접 아군의 행동력이 감소하며 해당 라운드 동안에는 스킬을 사용할 수 없게 됩니다.",
      "areadata": [
        1,2,3,4,6,7,8,9
      ]
    }
    ]
  },
  {
  "name": "양산형 스팅어",
  "img": "Stinger",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "네이팜 버너",
      "img": "WideFireShot",
      "range": 2,
      "description": "화염 방사로 <span id='askillpower1'></span> 피해를 주고, 뒤의 대상에게는 50% 감소한 피해를 줍니다. 3라운드 동안 대상을 점화 상태로 만들어 지속 화염 피해를 줍니다.",
      "areadata": [
        0,
        0,
        0,
        0.5,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "파쇄 돌격",
      "img": "AssaultAttack",
      "range": 3,
      "description": "목표 대상에게 돌격해 <span id='askillpower2'></span> 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 표식 상태인 경우 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "예열 개시",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "이동 시, 3라운드 동안 공격력 / 행동력 / 회피가 증가합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "스팅어 커스텀",
  "img": "StingerC",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "냉동 가스 분사",
      "img": "Beam",
      "range": 3,
      "description": "대상에게 냉동 가스를 분사해 <span id='askillpower1'></span> 냉기 속성 피해를 주고, 일정 확률로 3라운드 동안 냉기 / 전기 저항을 낮춥니다. 대상에게 냉기 저항 감소 효과가 이미 적용되어 있는 경우, 일정 확률로 행동 불가 / 받는 피해 증가 / 강화 해제 상태로 만듭니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "일점 돌파",
      "img": "AssaultAttack",
      "range": 4,
      "description": "대상에게 돌격해 <span id='askillpower2'></span> 피해를 줍니다. 대상이 빙결 상태인 경우, 피해량이 크게 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "침입자 경계",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "공격 시, 공격한 적에게만 집중해 회피가 크게 증가하지만 받는 피해도 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "강습 준비",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "지정 대상 보호를 받는 상태로 라운드 개시 시, 공격력과 치명타가 증가합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "양산형 기간테스",
  "img": "Gigantes",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "로켓 배쉬",
      "img": "MeleeAttack",
      "range": 1,
      "description": "대상을 강타해 <span id='askillpower1'></span> 피해를 주고, 일정 확률로 해당 라운드 동안 행동 불가 상태로 만듭니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "실드 차지",
      "img": "AssaultAttack",
      "range": 2,
      "description": "대상에게 돌진해 <span id='askillpower2'></span> 피해를 주고, 뒤로 1칸 밀며 대상에게 걸린 행 보호 또는 열 보호 효과를 해제합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "거점 방어 모드",
      "img": "TeamDefBuff",
      "range": 0,
      "description": "전투 개시 시, 3라운드 동안 행 보호 효과를 활성화하며 방어력이 증가합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "기간테스 커스텀",
  "img": "GigantesC",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "너클 버스터",
      "img": "MeleeAttack",
      "range": 1,
      "description": "대상을 강타해 <span id='askillpower1'></span> 피해를 주고 뒤로 한 칸 밉니다. 자신의 HP %가 낮을수록 피해량이 증가하며, 25% 이하인 경우 방어막과 피해 감소 효과를 무시합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "차지 스매시",
      "img": "AssaultAttack",
      "range": 2,
      "description": "대상을 밀쳐 <span id='askillpower2'></span> 피해를 주고 뒤로 2칸 날립니다. 피격 대상은 AP가 감소합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "개량형 방어 OS",
      "img": "TeamDefBuff",
      "range": 0,
      "description": "자신이 공격하기 전까지는 방어력과 효과 저항이 크게 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "거점 순찰",
      "img": "TeamDefBuff",
      "range": 0,
      "description": "인접한 보호기 제외 아군을 보호하며 대상의 행동력을 증가시킵니다.",
      "areadata": [
        2,4,5,6,8
      ]
    }
  ]
},
{
  "name": "양산형 셀주크",
  "img": "Seljuq",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "175mm 직사포",
      "img": "CannonShotWide",
      "range": 2,
      "description": "직사 포격으로 목표 대상이 있는 열에 <span id='askillpower1'></span> 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
      "areadata": [
        2,
        5,
        8
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "175mm 곡사포",
      "img": "CannonShotDelay",
      "range": 6,
      "description": "2라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 <span id='askillpower2'></span> 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 표식 상태인 대상에게는 피해량이 증가합니다.",
      "areadata": [
        0,
        0.5,
        0,
        0.5,
        1,
        0.5,
        0,
        0.5,
        0
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "대 보병 고폭탄",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "대 보병 고폭탄을 장전해, 경장형에게 주는 피해가 증가합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "셀주크 커스텀",
  "img": "SeljuqA",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "산탄 포격",
      "img": "CannonShotWide",
      "range": 4,
      "description": "지정 범위에 <span id='askillpower1'></span> 피해를 줍니다. 대상이 방어 감소 또는 이동 불가 상태면 피해량이 크게 증가합니다.",
      "areadata": [
        1,
        4,5,
        7
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "확산형 곡사포",
      "img": "CannonShotDelay",
      "range": 5,
      "description": "지정 범위에 <span id='askillpower2'></span> 보호 무시 피해를 줍니다. 목표 지점 주변은 피해가 75%만 적용되며, 대상이 경장형 또는 기동형이면 피해량이 크게 증가합니다.",
      "areadata": [
        0,
        0.75,
        0,
        0.75,
        1,
        0.75,
        0,
        0.75,
        0
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "포격 보정",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "공격 시, 적의 움직임을 분석해 적중과 치명타가 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "증가 장갑",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "전투 개시 시, 방어력이 크게 증가합니다. 해당 효과는 5회 피격되거나 전기 속성 공격을 맞으면 해제됩니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "칙 쿼터마스터",
  "img": "NightChickQM",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "공격 방해",
      "img": "Shot",
      "range": 4,
      "description": "대상에게 <span id='askillpower1'></span> 피해를 주며, 2라운드 동안 대상의 공격력 / 적중 / 치명타를 낮춥니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "출력 강화",
      "img": "TeamAtkBuff",
      "range": 3,
      "description": "주변 아군의 출력을 강화해 공격력 / 적중 / 치명타를 높입니다. 자신은 행동력이 증가합니다.",
      "areadata": [
        2,
        4,
        5,
        6,
        8
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "일제 공격 지원",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 일정 확률로 무장 보급을 받은 아군의 공격을 지원합니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "숙련된 칙 웅크리기",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "HP가 50% 이하가 되면 받는 피해가 감소하며 회피가 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "과전류 방출",
      "img": "TeamAtkDeBuff",
      "range": 0,
      "description": "사망 시, 모든 아군의 행동력 / 공격력이 감소합니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        7,
        8,
        9
      ]
    }
  ]
},
{
  "name": "레기온 스나이퍼",
  "img": "LegionSP",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "점착탄 난사",
      "img": "TeamSpdDeBuff",
      "range": 4,
      "description": "점착탄을 난사해 <span id='askillpower1'></span> 피해를 주고, 대상들의 회피를 낮추며 회피 강화 효과를 해제합니다. 적중 대상은 이동 불가 상태가 되며, 자신은 적중과 치명타가 증가합니다.",
      "areadata": [
        2,
        5,
        8
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "대장갑 정밀 저격",
      "img": "Snipe",
      "range": 5,
      "description": "대장갑 정밀 저격으로 <span id='askillpower2'></span> 방어 관통 피해를 줍니다. 대상이 중장형인 경우, 피해랑이 크게 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "위장 홀로그램 발산",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "위장 홀로그램을 발산해, 적 진영과 멀수록 회피가 증가합니다. 해당 효과는 공격 시, 해당 라운드에는 일시적으로 해제됩니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "토터스",
  "img": "Tortoise",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "프래그 샷건",
      "img": "ShotGun",
      "range": 3,
      "description": "샷건을 발사해 <span id='askillpower1'></span> 피해를 줍니다. 자신이 전열이면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "장갑 장착",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "외장형 반응 장갑을 장착해 전투 속행 효과를 얻으며, 방어력과 모든 속성 저항이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "외장형 반응 장갑",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "공격 받는 경우, 3회까진 최소 피해만 받으며 효과 저항이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "엄폐 지원",
      "img": "TeamDefBuff",
      "range": 0,
      "description": "라운드 개시 시, 같은 행의 뒤에 배치된 아군을 보호합니다. 해당 효과는 자신이 스킬을 사용하면 해제됩니다.",
      "areadata": [
        4,5,6
      ]
    }
  ]
},
  {
    "name": "센츄리온 치프틴",
    "img": "Centurion",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정밀 유도 미사일",
        "img": "MultiMissile",
        "range": 4,
        "description": "정밀 유도 미사일로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
        "areadata": [
        5,6,8,9
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "멀티 록 온",
        "img": "Scan",
        "range": 4,
        "description": "목표 범위 대상들을 표식으로 설정하고, 회피 강화 효과를 해제하며 회피가 낮춥니다. 자신은 적중이 증가하며, 대상들은 받는 피해 증가 상태가 됩니다.",
        "areadata": [
          2,4,5,6,8
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대열 정비",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "아군 사망 시, 대열을 정비해 인접한 아군들과 자신의 행동력 / 적중 / 회피가 증가합니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위기 극복",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "공격 받을 때, 자신에게 능력치 감소 효과가 적용되어 있으면 반격하며, 일정 확률로 해당 효과를 해제합니다..",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "센츄리온 제너럴",
    "img": "CenturionG",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "집속 연장 미사일",
        "img": "MultiMissile",
        "range": 6,
        "description": "지정 범위에 <span id='askillpower1'></span> 피해를 주고, 3라운드 동안 대상을 표식 / 받는 피해 증가 상태로 만들고 AP를 감소시킵니다. 일정 확률로 적중 대상의 강화 효과를 해제합니다.",
        "areadata": [
        2,4,5,6,8
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "출력 한도 해제",
        "img": "TeamAtkBuff",
        "range": 6,
        "description": "주변 아군의 공격력 / 치명타 / 행동력을 증가시키고 방어막과 받는 피해 감소 무시 효과를 부여합니다. 해당 효과를 받은 대상은 지속 고정 피해를 입습니다.",
        "areadata": [
          1,2,3,4,6,7,8,9
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전황 분석",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "피격 시, 모든 아군의 AP가 증가하며 2라운드 동안 효과 저항이 대폭 증가합니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "현장 수습",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "아군이 처치될 경우, 일정 라운드 동안 반격하며 주변 아군과 자신이 받는 피해가 감소하고 행동력이 증가합니다.",
        "areadata": [
          2,4,5,6,8
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "지휘 중추 상실",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "description": "자신이 처치될 경우, 모든 아군의 공격력 / 치명타 / 적중 /행동력이 크게 감소하며 받는 피해가 증가합니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      }
    ]
  },
{
  "name": "철충 사념체 (보병)",
  "img": "ProgramMobTS",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "집중 견제",
      "img": "ARShot",
      "range": 4,
      "description": "집중 견제 사격으로 <span id='askillpower1'></span> 피해를 주고, 대상의 공격력 / 적중 / 회피를 낮추며 받는 피해 증가 상태로 만듭니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "냉각기 조준",
      "img": "ARShot",
      "range": 3,
      "description": "조준 사격으로 <span id='askillpower2'></span> 피해를 줍니다. 대상이 로봇인 경우, 냉각 장치를 파괴해 화염 저항과 행동력을 낮춥니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "상황 전파",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "아군 사망 시, 주변에 있는 아군에게 상황을 전파해 AP와 공격력을 상승시킵니다.",
      "areadata": [
        2,4,6,8
      ]
    }
  ]
},
{
  "name": "철충 사념체 (호위기)",
  "img": "ProgramMobMT",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "냉각탄 사격",
      "img": "IceShot",
      "range": 3,
      "description": "냉각탄 사격으로 <span id='askillpower1'></span> 냉기 속성 피해를 주고, 대상의 냉기 저항을 낮춥니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "대 레이더 채프",
      "img": "MultiMissile",
      "range": 2,
      "description": "지정 범위에 채프를 살포해 2라운드 동안 범위 내 아군의 회피 / 행동력을 증가시키며 받는 피해를 감소시킵니다.",
      "areadata": [
        5,
        6,
        8,
        9
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "호위 대형",
      "img": "TeamDefBuff",
      "range": 0,
      "description": "전투 개시 시, 3라운드 동안 인접한 아군을 보호하며 적중을 증가시킵니다.",
      "areadata": [
        2,
        4,
        6,
        8
      ]
    }
  ]
},
{
  "name": "철충 사념체 (장갑병)",
  "img": "ProgramMobTT",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "제압 사격",
      "img": "MultiMissile",
      "range": 3,
      "description": "제압 사격으로 <span id='askillpower1'></span> 피해를 주고 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 AP와 행동력을 감소시킵니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "밀착 호위",
      "img": "Scan",
      "range": 6,
      "description": "3라운드 동안 대상 아군을 보호하며 대상의 AP를 증가시킵니다. 자신은 받는 피해가 감소합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "경계 강화",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 자신의 HP가 50% 이하면 행동력이 증가하며 반격합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "철충 사념체 (저격병)",
  "img": "ProgramMobTN",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "표적 제거",
      "img": "Snipe",
      "range": 4,
      "description": "저격으로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "쇼크탄 사격",
      "img": "Shock",
      "range": 4,
      "description": "쇼크탄 저격으로 <span id='askillpower2'></span> 전기 속성 피해를 줍니다. 대상이 냉기 저항 감소 상태면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "전열 지원 사격",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 자신과 같은 행 앞에 배치된 아군의 AP를 증가시키며 일정 확률로 대상의 공격을 지원합니다.",
      "areadata": [
        4,
        5,
        6
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "대응 사격",
      "img": "DefCounter",
      "range": 0,
      "description": "아군 사망 시, 해당 라운드 동안에는 반격합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "철충 사념체 (폭격기)",
  "img": "ProgramMobMN",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "작열 미사일",
      "img": "Missile",
      "range": 3,
      "description": "미사일로 <span id='askillpower1'></span> 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 대상이 화염 저항 감소 상태면 일정 확률로 점화 상태로 만듭니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "소이탄 폭격",
      "img": "AirStrike",
      "range": 2,
      "description": "목표 범위에 <span id='askillpower2'></span> 화염 속성 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
      "areadata": [
        4,
        5,
        6
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "정밀 레이더",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "라운드 개시 시, 적중 / 회피가 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "지상 감지 시스템",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "공격 시, 일정 확률로 경장 / 중장형 적에게 주는 피해가 증가합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "철충 사념체 (정찰기)",
  "img": "ProgramMobMS",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "지향 사격",
      "img": "MultiMissile",
      "range": 3,
      "description": "기총 난사로 <span id='askillpower1'></span> 피해를 주고, 대상들을 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 행동력과 회피를 감소시키며, 일정 확률로 피해 감소 효과를 해제합니다.",
      "areadata": [
        4,
        5,
        6
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "다연장 재밍 미사일",
      "img": "Scan",
      "range": 3,
      "description": "재밍 미사일로 <span id='askillpower2'></span> 피해를 주고, 대상의 공격력 / 적중 / 치명타를 낮춥니다. 일정 확률로 대상에게 적용된 공격력 강화 효과를 해제합니다.",
      "areadata": [
        2,
        5,
        8
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "긴급 경보",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 주변에 HP가 33% 이하인 아군이 있으면 대상의 AP와 회피를 증가시킵니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        6,
        7,
        8,
        9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "공격 분석",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "피격 시, 공격을 분석해 해당 라운드 동안 회피가 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "경보 오작동",
      "img": "TeamAtkDeBuff",
      "range": 0,
      "description": "사망 시, 레이더 망에 오류가 발생해 모든 아군의 적중 / 회피가 감소합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    }
  ]
},
{
  "name": "철충 사념체 (돌격병)",
  "img": "ProgramMobAS",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "스턴 스파이크",
      "img": "MultiMissile",
      "range": 3,
      "description": "대상에게 <span id='askillpower1'></span> 전기 속성 피해를 줍니다. 대상이 냉기 저항 감소 상태면 감전시켜 지속 전기 피해를 줍니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "파일 벙커 드라이브",
      "img": "Scan",
      "range": 2,
      "description": "파일 벙커로 대상에게 <span id='askillpower2'></span> 피해를 주며, 대상을 뒤로 밉니다. 대상에게 적용중인 모든 보호효과를 해제하며, 표식 상태면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "노즐 강화",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "경장형에게 주는 피해가 증가하며, 피해 감소 효과와 방어막을 무시합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "전열 돌파",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "라운드 개시 시, 일정 확률로 같은 열에 인접한 아군의 공격을 지원합니다.",
      "areadata": [
        2,8
      ]
    }
  ]
},
{
  "name": "철충 사념체 (포병)",
  "img": "ProgramMobAN",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "122mm APFSDS",
      "img": "CannonShot",
      "range": 5,
      "description": "포격으로 <span id='askillpower1'></span> 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 공격기인 경우 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "확산형 고폭탄",
      "img": "CannonShotWide",
      "range": 4,
      "description": "확산 포격으로 무시하고 <span id='askillpower2'></span> 화염 속성 피해를 줍니다. 대상이 표식 상태면 피해 감소 효과를 해제합니다.",
      "areadata": [
        1,
        4,
        5,
        7
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "연계 포격",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "적 처치 시, AP가 증가하며 다음 공격까지 공격력이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "핀 포인트 포격",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 전열에 있으면 적의 방어막과 피해 감소 효과를 무시합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "집중 포격 대열",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 같은 열에 인접한 아군의 공격력 / 치명타를 상승시킵니다.",
      "areadata": [
        2,8
      ]
    }
  ]
},
{
  "name": "철충 사념체 (중장갑병)",
  "img": "ProgramMobAT",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "2연장 속사포",
      "img": "MGShot",
      "range": 3,
      "description": "기관포로 <span id='askillpower1'></span> 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 행동 불가 상태로 만듭니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "충격탄 발사",
      "img": "CannonShot",
      "range": 4,
      "description": "충격탄을 발사해 <span id='askillpower2'></span> 피해를 주고, 대상의 행동력을 감소시킵니다. 일정 확률로 대상에게 걸려있는 강화 효과를 해제합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "내성 처리",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "라운드 개시 시, 모든 속성 저항과 상태 이상 저항이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "특수 반응 장갑",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "HP가 50% 이하인 경우, 피격 시 일정 확률로 방어력이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "공격 대열 보호",
      "img": "TeamDefBuff",
      "range": 0,
      "description": "같은 열의 아군을 보호하며, 자신과 같은 행의 뒤에 배치된 아군이 받는 피해를 감소시킵니다.",
      "areadata": [
        4,
        5,
        6
      ]
    }
  ]
},
  {
    "name": "빅 칙",
    "img": "BigChick",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "중 기관총 사격",
        "img": "MGShot",
        "range": 4,
        "description": "중 기관총으로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관총",
        "img": "MGShot",
        "range": 1,
        "description": "중 기관총 근접 사격으로 <span id='askillpower2'></span> 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어력 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "풀아머 빅 칙",
    "img": "FABigChick",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포",
        "img": "MGShot",
        "range": 4,
        "description": "기관포로 <span id='askillpower1'></span> 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논",
        "img": "CannonShot",
        "range": 2,
        "description": "캐논포를 연사해 목표 열에 <span id='askillpower2'></span> 피해를 줍니다. 피해 감소 효과를 무효화합니다.",
        "areadata": [
          2,
          5,
          8
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "강화형 빅 칙",
    "img": "BigChick",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "돌격 난사",
        "img": "Shot",
        "range": 3,
        "description": "기관포를 발사해 목표 적에게 <span id='askillpower1'></span> 피해를 줍니다.",
        "areadata": [
          2,5,8
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "기관포 난사",
        "img": "Shot",
        "range": 1,
        "description": "기관포를 난사해 목표 적들에게 <span id='askillpower2'></span> 피해를 줍니다.",
        "areadata": [
          1,4,5,7
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "과출력 상태",
        "img": "Shock",
        "range": 0,
        "description": "자신의 HP가 50% 이상인 경우, 과출력 상태가 되어 공격력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "스토커",
    "img": "Stalker_B0108",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "저격",
        "img": "Chargeshot",
        "range": 6,
        "description": "레일건 저격으로 <span id='askillpower1'></span> 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "챠지",
        "img": "SelfAtkBuff",
        "range": 6,
        "description": "레일건을 충전해, 다음 공격이 치명타로 적용되며 일정 라운드 동안 공격력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "리액터 폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "description": "사망 시, 리액터가 폭발에 주변에 매우 높은 물리 피해를 줍니다.",
        "areadata": [
          1,
          2,
          3,
          4,
          6,
          7,
          8,
          9
        ]
      }
    ]
  },
  {
    "name": "프레데터",
    "img": "Predator_B0208",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "후려치기",
        "img": "MeleeAttack",
        "range": 1,
        "description": "대상을 강타해 <span id='askillpower1'></span> 피해를 주고, 1칸 뒤로 밀어내며 일정 확률로 2라운드 동안 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "부식 용액",
        "img": "TeamDefDeBuff",
        "range": 3,
        "description": "부식 용액으로 목표 대상들에게 <span id='askillpower2'></span> 피해를 주며, 2라운드 동안 부식 상태로 만듭니다. 부식 상태인 대상은 방어력과 행동력이 감소하며, 지속 물리 피해를 입습니다. 보호 효과를 무시합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "생존 본능",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "HP 25% 이하가 되면 받는 피해가 감소하며, 행동력 / 적중 / 효과 저항이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "마무리 공격",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "생존 본능이 발동한 상태로 공격하는 경우, 방어막과 피해 감소 효과를 무시하며 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "멈출 수 없는 본능",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "피격 시, 일정 확률로 이동 불가 / 행동 불가 / 행동력 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "트릭스터 (3-8)",
    "img": "Kidnapper_B0308",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "클로 돌진",
        "img": "AssaultAttack",
        "range": 4,
        "description": "클로 돌진으로 목표와 바로 뒤의 대상에게 <span id='askillpower1'></span> 피해를 줍니다. 5라운드 동안 공격 대상의 방어력을 감소시킵니다. 최대 5번까지 중첩됩니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "광란의 학살",
        "img": "AssaultAttack",
        "range": 5,
        "description": "순식간에 대상에게 접근해 <span id='askillpower2'></span> 피해를 줍니다. 방어막 / 피해 감소 / 보호 효과를 무시하며, 대상의 HP가 낮을수록 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "살육 쾌감",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "도발 상태일 때 공격 적중 시, 5라운드 동안 공격력이 증가합니다. 해당 효과는 5번까지 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위협 감지",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "피격 시, 위협을 감지해 해당 라운드 동안 회피가 증가하며 공격력이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "멈출 수 없는 본능",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "적을 처치한 경우, 3라운드 동안 행동력과 치명타가 증가합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "트릭스터 (5-4-1)",
    "img": "Kidnapper_B0308",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "클로 돌진",
        "img": "AssaultAttack",
        "range": 4,
        "description": "클로 돌진으로 목표와 바로 뒤의 대상에게 <span id='askillpower1'></span> 피해를 줍니다. 5라운드 동안 공격 대상의 방어력을 감소시킵니다. 최대 5번까지 중첩됩니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "손톱날 발사",
        "img": "MultiMissile",
        "range": 1,
        "description": "폭발하는 손톱날을 발사해 목표 열에 <span id='askillpower2'></span> 피해를 주고 대상을 뒤로 한 칸 밉니다. 공격 대상들은 2라운드 동안 적중이 감소합니다.",
        "areadata": [
          2,5,8
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "살육 쾌감",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "도발 상태일 때 공격 적중 시, 5라운드 동안 공격력이 증가합니다. 해당 효과는 5번까지 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위협 감지",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "피격 시, 위협을 감지해 해당 라운드 동안 회피가 증가하며 공격력이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "광란",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "적을 처치한 경우, 3라운드 동안 행동력과 치명타가 증가합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "트릭스터 (5-4-2)",
    "img": "Kidnapper_B0308",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "클로 돌진",
        "img": "AssaultAttack",
        "range": 4,
        "description": "클로 돌진으로 목표와 바로 뒤의 대상에게 <span id='askillpower1'></span> 피해를 줍니다. 5라운드 동안 공격 대상의 방어력을 감소시킵니다. 최대 5번까지 중첩됩니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "광란의 학살",
        "img": "AssaultAttack",
        "range": 5,
        "description": "순식간에 대상에게 접근해 <span id='askillpower2'></span> 피해를 줍니다. 방어막 / 피해 감소 / 보호 효과를 무시하며, 대상의 HP가 낮을수록 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "살육 쾌감",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "도발 상태일 때 공격 적중 시, 5라운드 동안 공격력이 증가합니다. 해당 효과는 5번까지 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위협 감지",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "피격 시, 위협을 감지해 해당 라운드 동안 회피가 증가하며 공격력이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "광란",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "적을 처치한 경우, 3라운드 동안 행동력과 치명타가 증가합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "레이더",
    "img": "Raider_B04",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "교란 파동",
        "img": "TeamAtkDeBuff",
        "range": 4,
        "description": "목표 범위에 보호 효과를 무시하는 교란 파동을 발사해 <span id='askillpower1'></span> 피해를 주고, 3라운드 동안 대상의 사거리 / 적중 / 치명타를 감소시킵니다. 일정 확률로 대상에게 걸려있는 강화 효과를 해제합니다.",
        "areadata": [
          1,
          4,
          5,
          7
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "반응 폭탄 투하",
        "img": "AirStrike",
        "range": 4,
        "description": "목표 지점에 폭탄을 투하해 보호 효과를 무시하고 <span id='askillpower2'></span> 피해를 줍니다. 목표 지점 주변은 피해가 50% 감소하며, 치명타 적중 시 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "교신 프로토콜",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "경계 상태로 라운드 개시 시, 인접한 철충들의 적중 감소 효과를 해제하고 적중 / 회피 / 치명타를 증가시킵니다.",
        "areadata": [
          1,
          2,
          3,
          4,
          6,
          7,
          8,
          9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "명령 프로토콜",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "자신의 HP가 50% 이하 상태에서 피격된 경우, 주변 철충들에게 요격 명령을 내려 AP가 증가합니다.",
        "areadata": [
          1,
          2,
          3,
          4,
          6,
          7,
          8,
          9
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "경계",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "통솔하는 철충이 처치된 경우, 경계 상태가 되어 2라운드 동안 행동력과 회피가 증가합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "광폭화 레이더",
    "img": "Raider_B04_CH",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플라즈마 광탄",
        "img": "Shock",
        "range": 5,
        "description": "전격구를 발사해 <span id='askillpower1'></span> 전기 속성 피해를 줍니다. 대상이 감전 상태면 회피를 감소시키며, 일정 확률로 행동 불능 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "광탄 난사",
        "img": "WideLightning",
        "range": 5,
        "description": "방전 공격으로 보호 효과를 무시하고 <span id='askillpower2'></span> 전기 속성 피해를 줍니다. 일정 확률로 대상을 감전시켜 3라운드 동안 행동력과 회피를 낮춥니다.",
        "areadata": [
          1,
          4,
          5,
          7
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "교신 프로토콜",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "경계 상태로 라운드 개시 시, 인접한 철충들의 적중 감소 효과를 해제하고 적중 / 회피 / 치명타를 증가시킵니다.",
        "areadata": [
          1,
          2,
          3,
          4,
          6,
          7,
          8,
          9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "명령 프로토콜",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "자신의 HP가 50% 이하 상태에서 피격된 경우, 주변 철충들에게 요격 명령을 내려 AP를 증가시킵니다.",
        "areadata": [
          1,
          2,
          3,
          4,
          6,
          7,
          8,
          9
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "경계",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "통솔하는 철충이 처치된 경우, 경계 상태가 되어 2라운드 동안 행동력과 회피가 증가합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
  "name": "언더왓쳐 (5-8)",
  "img": "UnderWatcher_B05",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "확산 플라즈마 입자포",
      "img": "WideBeamShot",
      "range": 5,
      "description": "지정 범위에 보호 효과를 무시하고 <span id='askillpower1'></span> 피해를 주는 확산 입자포를 발사합니다. 표식 상태인 대상에게 피해량이 증가합니다.",
      "areadata": [
        1,
        4,
        5,
        7
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "메가 플라즈마 캐논",
      "img": "BeamShot",
      "range": 8,
      "description": "지정 행에 <span id='askillpower2'></span> 피해를 주는 플라즈마 입자포를 발사합니다. 보호 효과를 무시하며, 표식 상태인 대상에게 피해량이 크게 증가합니다.",
      "areadata": [
        4,
        5,
        6
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "특수 합금 발사구",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "라운드 개시 시 에너지 충전 상태인 경우, 공격하기 전까지는 방어력과 효과 저항이 크게 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "최대 출력",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "에너지 충전 중첩이 4 이상이면, 공격할 때 방어막과 피해 감소 효과를 무시합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "시스템 정지",
      "img": "SuiceideBomb",
      "range": 0,
      "description": "사망할 경우, 관련된 모든 시스템이 정지합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    }
  ]
},
{
  "name": "언더왓쳐 센서 (5-8)",
  "img": "UnderWatcherSensor_B05",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "록 온 센서",
      "img": "Scan",
      "range": 8,
      "description": "목표 대상을 조준해 3라운드 동안 표식을 설정하고, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "다중 록 온 시스템",
      "img": "Scan",
      "range": 8,
      "description": "목표 대상들을 조준해 3라운드 동안 표식을 설정하고, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다.",
      "areadata": [
        2,
        4,
        5,
        6,
        8
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "조준 보정 시스템",
      "img": "Scan",
      "range": 0,
      "description": "라운드 개시 시, 자신의 현재 HP 비율에 따라 주변 장치에게 적중 증가 효과를 줍니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "최대 출력",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "에너지 충전 중첩이 3 이상이면, 방해 효과를 걸 확률이 증가합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "언더왓쳐 암 (5-8)",
  "img": "UnderWatcherArm_B05",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "플라즈마 커터",
      "img": "MeleeAttack",
      "range": 8,
      "description": "플라즈마 커터로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "대공 펄스 빔 포",
      "img": "WideBeamShot",
      "range": 8,
      "description": "목표 열에 <span id='askillpower2'></span> 피해를 줍니다. 대상이 기동형이면 피해량이 증가합니다.",
      "areadata": [
        2,
        4,
        5,
        6,
        8
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "재 조준",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "공격 시, 적중 강화 상태면 적중이 추가로 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "최대 출력",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "에너지 충전 중첩이 5 이상이면, 적중이 증가하며 반격합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "언더왓쳐 제네레이터 (5-8)",
  "img": "UnderWatcherGenerator_B05",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "에너지 충전",
      "img": "SelfAtkBuff",
      "range": 6,
      "description": "각 장치들에게 에너지를 전달해, 공격력을 증가시킵니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        7,
        8,
        9
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "에너지 실드",
      "img": "SelfDefBuff",
      "range": 6,
      "description": "에너지 실드를 전개해 2라운드 동안 피해를 흡수하는 방어막을 부여하고, 상태 이상을 해제합니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "재충전 개시",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "라운드 개시 시, HP가 50% 이하면 자신에게 걸린 해로운 효과를 모두 제거하고 받는 피해가 감소하며 효과 저항이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "제네레이터 쇼트",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "피격 시, 일정 확률로 쇼트가 생겨 2라운드 동안 행동 불능이 됩니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "제네레이터 파괴",
      "img": "SuiceideBomb",
      "range": 0,
      "description": "파괴될 경우, 모든 파츠의 강화 효과가 해제되고 행동 불가 상태가 됩니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    }
  ]
},
{
  "name": "언더왓쳐 (5-8Ex)",
  "img": "UnderWatcher_B05",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "확산 플라즈마 입자포",
      "img": "WideBeamShot",
      "range": 5,
      "description": "지정 범위에 보호 효과를 무시하고 <span id='askillpower1'></span> 피해를 주는 확산 입자포를 발사합니다. 대상이 표식 상태면 피해량이 증가하며, 대상의 방어력을 감소시킵니다.",
      "areadata": [
        1,2,4,5,6,7,8
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "메가 플라즈마 캐논",
      "img": "BeamShot",
      "range": 8,
      "description": "지정 행에 <span id='askillpower2'></span> 피해를 주는 플라즈마 입자포를 발사합니다. 보호 효과를 무시하며, 표식 상태인 대상에게 피해량이 크게 증가합니다.",
      "areadata": [
        4,
        5,
        6
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "특수 합금 발사구",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "공격 받을 때, 에너지 충전 상태면 높은 확률로 최소 피해만 받습니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "최대 출력",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "에너지 충전 중첩이 4 이상이면, 공격할 때 방어막과 피해 감소 효과를 무시합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "시스템 정지",
      "img": "SuiceideBomb",
      "range": 0,
      "description": "사망할 경우, 관련된 모든 시스템이 정지합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    }
  ]
},
{
  "name": "언더왓쳐 센서 (5-8Ex)",
  "img": "UnderWatcherSensor_B05",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "록 온 센서",
      "img": "Scan",
      "range": 8,
      "description": "목표 대상을 조준해 표식으로 설정한 후, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다. AP를 감소시키며, 일정 확률로 강화 효과를 해제합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "다중 록 온 시스템",
      "img": "Scan",
      "range": 8,
      "description": "목표 대상들을 조준해 표식으로 설정한 후, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다.강화 효과를 해제하며, AP를 감소시킵니다.",
      "areadata": [
        2,
        4,
        5,
        6,
        8
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "조준 보정 시스템",
      "img": "Scan",
      "range": 0,
      "description": "라운드 개시 시, 자신의 현재 HP 비율에 따라 주변 장치에게 적중 증가 효과를 줍니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "최대 출력",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "에너지 충전 중첩이 3 이상이면, 방해 효과를 걸 확률과 회피가 대폭 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "반응 강화 모드",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "HP가 50% 이하가 되면 매 라운드 회피가 증가합니다. 최대 3회까지 중첩됩니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "언더왓쳐 암 (5-8Ex)",
  "img": "UnderWatcherArm_B05",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "플라즈마 커터",
      "img": "MeleeAttack",
      "range": 8,
      "description": "플라즈마 커터로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 표식 상태면 피해량이 증가하며, 대상의 방어력을 감소시킵니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "대공 펄스 빔 포",
      "img": "WideBeamShot",
      "range": 8,
      "description": "목표 열에 <span id='askillpower2'></span> 피해를 줍니다. 대상이 기동형이면 피해량이 증가합니다.",
      "areadata": [
        2,
        4,
        5,
        6,
        8
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "재 조준",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "공격 시, 적중 강화 상태면 적중이 추가로 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "최대 출력",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "에너지 충전 중첩이 5 이상이면, 적중과 치명타가 증가하며 반격합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "긴급 요격 모드",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "자신의 HP가 50% 이하인 경우, 라운드 개시 시 AP가 증가합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "언더왓쳐 제네레이터 (5-8Ex)",
  "img": "UnderWatcherGenerator_B05",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "에너지 충전",
      "img": "SelfAtkBuff",
      "range": 8,
      "description": "각 장치들에게 에너지를 전달해, 공격력과 효과 저항을 증가시키며 받는 피해를 1회 무효화합니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        7,
        8,
        9
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "에너지 실드",
      "img": "SelfDefBuff",
      "range": 8,
      "description": "에너지 실드를 전개해 피해를 흡수하는 방어막을 부여하고, 상태 이상을 해제합니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "에너지 코팅",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "스킬 사용 시, 받는 공격을 3회 무효화합니다. 3라운드 동안 받는 피해가 감소하며, 효과 저항이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "제네레이터 쇼트",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "피격 시, 높은 확률로 AP가 감소하며 낮은 확률로 쇼트가 생겨 행동 불능이 됩니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "제네레이터 파괴",
      "img": "SuiceideBomb",
      "range": 0,
      "description": "파괴될 경우, 모든 파츠의 강화 효과가 해제되고 행동 불가 상태가 됩니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    }
  ]
},
{
    "name": "실험체 고블린",
    "img": "ExpGoblinT",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "부식탄 사격",
        "img": "MGShot",
        "range": 3,
        "description": "대상에게 <span id='askillpower1'></span> 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 부식 상태로 만듭니다.",
        "areadata": [
        5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "기관총 난사",
        "img": "MGWideShot",
        "range": 3,
        "description": "목표 범위에 <span id='askillpower2'></span> 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 강화 효과를 해제합니다.",
        "areadata": [
          0,0.5,0,0,1,0,0,0.5,0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "격분",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "피격 시, AP / 공격력 / 치명타가 증가하며 방어력이 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "재생 기능",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "전투 불능 시, 1회에 한해 HP를 회복하고 전투를 속행합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "실험체 고블린 파쇄병",
    "img": "ExpGoblinA",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 파쇄",
        "img": "MeleeAttack",
        "range": 3,
        "description": "대상에게 <span id='askillpower1'></span> 피해를 주고, 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 적중과 치명타가 감소합니다.",
        "areadata": [
        5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "벙커 사출",
        "img": "WideSwordAttk",
        "range": 4,
        "description": "목표 범위에 <span id='askillpower2'></span> 피해를 주고, 대상의 회피율과 효과 저항을 낮춥니다.",
        "areadata": [
          0,0,0,0.75,1,0,0,0,0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전투 본능",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "라운드 개시 시, 자신에게 무작위 강화 효과가 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "공격 경계",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "사망 시, 인접한 아군의 받는 피해와 행동력을 감소시키고 효과 저항을 증가시킵니다.",
        "areadata": [
          2,4,6,8
        ]
      }
    ]
  },
  {
  "name": "수상한 실험체",
  "img": "ExpGenerator2",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "출력 제한 해제",
      "img": "TeamAtkBuff",
      "range": 6,
      "description": "범위 내 아군의 출력 제한을 해제해, 공격력을 크게 올리며 적중을 감소시킵니다. 모든 해로운 효과를 해제합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "외피 강화 처리",
      "img": "TeamDefBuff",
      "range": 6,
      "description": "범위 내 아군의 AP를 올려주며, 받는 피해를 감소시킵니다. 효과를 받는 대상들은 전투 속행 효과가 적용됩니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        7,
        8,
        9
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "고출력 방어막",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "라운드 개시 시, 일정 수치의 방어막을 얻습니다. HP가 50% 이하가 되면 방어막 수치가 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "방어막 출력 상승",
      "img": "TeamDefBuff",
      "range": 0,
      "description": "피격 시, 방어막 출력을 올려 자신과 인접 아군이 받는 피해를 감소시킵니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "에너지 역류",
      "img": "TeamDefDeBuff",
      "range": 0,
      "description": "아군 사망 시, HP가 감소합니다. 파괴될 경우에는, 모든 아군을 행동 불능으로 만들며 강화 효과를 해제합니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        7,
        8,
        9
      ]
    }
  ]
},
{
  "name": "익스큐셔너",
  "img": "Executioner_B06",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "처형 개시",
      "img": "SwordAttk",
      "range": 5,
      "description": "지정 대상에게 <span id='askillpower1'></span> 피해를 줍니다. 대상이 행동 불가 상태면 피해량이 크게 증가하며, 해제 불가 행동 불능 효과를 부여합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "학살",
      "img": "WideSwordAttk",
      "range": 4,
      "description": "지정 범위에 <span id='askillpower2'></span> 보호 무시 피해를 줍니다. 처형자 중첩이 5 이상이면 추가 화염 피해를 주며, 대상에게 걸려있는 강화 효과를 해제합니다. 처형자 중첩을 5 소모합니다.",
      "areadata": [
        1,3,5,7,9
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "처형자",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "피격 시, 공격력이 영구적으로 증가합니다. 자신이 <공격 연계> 효과를 받는 상태면 공격 대상의 방어막과 피해 감소 효과를 무시합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "왜곡장",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "모든 피해를 최소 피해만 받습니다. 처형자 중첩이 5이상인 상태로 피격 시, 오버플로우로 인한 고정 물리 피해를 받으며 모든 강화 효과가 해제됩니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "고속 복원",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "<공격 차단> 효과를 받는 상태인 경우, 행동 불능이 되면 일정 HP를 회복하고 전투를 속행합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "익스큐셔너 실드 블레이드",
  "img": "ExecutionerLB_B06",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "장갑 해제",
      "img": "SwordAttk",
      "range": 4,
      "description": "지정 대상에게 <span id='askillpower1'></span> 피해를 주고, 대상의 장갑을 해제해 방어력을 낮추고 받는 피해를 증가시킵니다. 대상이 해당 효과를 다시 받는 경우, 행동 불가 상태로 만듭니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "무장 해제",
      "img": "WideSwordAttk",
      "range": 5,
      "description": "지정 범위에 <span id='askillpower2'></span> 피해를 주고, 대상의 무장을 해제해 공격력과 치명타를 낮춥니다. 대상이 해당 효과를 다시 받는 경우, 행동 불가 상태로 만듭니다.",
      "areadata": [
        2,5,8
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "공격 차단",
      "img": "TeamDefBuff",
      "range": 0,
      "description": "라운드 개시 시, HP가 50% 이상이면 본체와 다른 파츠를 보호합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "자동 방어 시스템",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "HP가 50% 이상이면 모든 피해를 최소화하며 효과 저항이 증가합니다. 활성화 된 상태에서 피격 시, 오버플로우 중첩이 쌓입니다. 중첩 4 이상 상태로 라운드 개시 시, 해당 상태가 해제되며 행동 불능이 됩니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "다중 장갑 구조",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "HP가 일정 이하가 되면 방어력이 대폭 감소하며 받는 피해가 증가합니다. 해당 상태에선 회피와 행동력이 크게 증가합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "익스큐셔너 롱 블레이드",
  "img": "ExecutionerRB_B06",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "쪼개기",
      "img": "SwordAttk",
      "range": 5,
      "description": "지정 대상에게 <span id='askillpower1'></span> 피해를 줍니다. 대상이 방어력 감소 상태면 피해량이 증가하며 피해 감소 효과를 해제합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "꼬챙이 꿰기",
      "img": "WideSwordAttk",
      "range": 4,
      "description": "지정 범위에 <span id='askillpower2'></span> 보호 무시 피해를 줍니다. 대상이 공격기 또는 지원기면 피해량이 증가합니다.",
      "areadata": [
        4,5,6
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "공격 연계",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 자신이 공격력 증가 상태면 본체와 다른 파츠의 공격을 지원합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "확인 사살",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "공격 시, 공격력 / 치명타가 증가합니다. 공격력 증가가 3중첩 이상인 경우, 피해 감소 효과를 무시하며 방어 관통 효과를 얻습니다. 피격 시 해제됩니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "경계 모드 전환",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "피격 시, 다음 공격을 받기 전까지 회피가 크게 증가하며 적중이 감소합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
  {
    "name": "로크 (최대 충전)",
    "img": "RocC_Charge",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "S. 블리츠 스톰",
        "img": "WideLightning",
        "range": 6,
        "description": "지정 범위에 <span id='askillpower1'></span> 보호 무시 전기 속성 피해를 주고 AP / 회피 / 행동력 / 전기 저항을 낮춥니다. 목표 지점 주변은 피해량이 50% 감소합니다. <전하 충전> 중첩을 2 사용합니다.",
        "areadata": [
			0,0.5,0,
			0.5,1,0.5,
			0,0.5,0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "H. 유피텔 스트라이크",
        "img": "AssaultAttack",
        "range": 6,
        "description": "지정 대상에게 <span id='askillpower2'></span> 보호 무시 전기 속성 피해를 주고 일정 확률로 행동 불가 상태로 만들며 강화 효과를 해제합니다. <전하 충전> 중첩을 5 사용하며, 치명타 시 피해량이 증가합니다.",
        "areadata": [
			5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전자기파 파장",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "라운드 개시 시, <전하 충전> 중첩 수에 비례해 회피가 증가합니다. 적 공격 회피 시, 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전하 최대 충전",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "<전하 충전> 중첩이 5 이상인 경우, 방어막 / 피해 감소 효과를 무시하며 적중과 치명타가 증가합니다. 해당 상태에서 냉기 속성 공격을 맞으면 강화 효과가 해제되며, 행동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "과충전 폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "description": "처치될 경우, 주변에 괴멸적인 고정 피해를 줍니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      }
    ]
  },
  {
    "name": "에너지 컨덴서",
    "img": "RocCGenerator",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전하 충전",
        "img": "SelfAtkBuff",
        "range": 6,
        "description": "로크 (최대 충전)에게 에너지를 충전해 공격력과 AP를 높입니다.",
        "areadata": [
			1,2,3,4,5,6,7,8,9
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "실드 충전",
        "img": "SelfDefBuff",
        "range": 6,
        "description": "모든 아군에게 방어막을 부여합니다.",
        "areadata": [
			1,2,3,4,5,6,7,8,9
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "복원 시스템",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "라운드 개시 시, 전투 속행 효과가 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "복원 대기",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "전투 속행 효과 발동 시, 3라운드 동안 행동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "로크 (최대 충전) (챌린지)",
    "img": "RocC_Charge",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "S. 블리츠 스톰",
        "img": "WideLightning",
        "range": 6,
        "description": "지정 범위에 <span id='askillpower1'></span> 보호 무시 전기 속성 피해를 주고 AP / 회피 / 행동력 / 전기 저항을 낮춥니다.",
        "areadata": [
			2,4,5,6,8
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "H. 유피텔 스트라이크",
        "img": "AssaultAttack",
        "range": 6,
        "description": "지정 대상에게 <span id='askillpower2'></span> 보호 무시 전기 속성 피해를 주고, 행동 불가 상태로 만들며 전기 저항을 감소시킵니다. 일정 확률로 강화 효과를 해제합니다. <전하 충전> 중첩을 3 사용하며, 치명타 시 피해량이 증가합니다.",
        "areadata": [
			5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전자기파 파장",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "<전하 충전> 중첩 수에 비례해 회피가 증가하며, 회피 시 반격합니다. 자신의 HP가 25% 이하인 상태로 적을 공격할 때, 회피가 추가로 증가합니다. 냉기 속성 공격 피격 시, 회피 강화 효과가 해제됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전하 최대 충전",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "<전하 충전> 중첩이 5 이상인 경우, 2라운드 동안 방어막 / 피해 감소 효과를 무시하며 공격력 / 적중 / 치명타 / 효과 저항이 증가합니다. 해당 상태에서 냉기 속성 공격을 맞으면 강화 효과가 해제되며, 행동 불가 / 받는 피해 증가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "과충전 폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "description": "처치될 경우, 주변에 괴멸적인 고정 피해를 줍니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      }
    ]
  },
  {
    "name": "강화 에너지 컨덴서",
    "img": "RocCGenerator",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전하 충전",
        "img": "SelfAtkBuff",
        "range": 6,
        "description": "로크 (최대 충전)에게 에너지를 충전해 공격력과 AP를 높입니다.",
        "areadata": [
			1,2,3,4,5,6,7,8,9
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "실드 충전",
        "img": "SelfDefBuff",
        "range": 6,
        "description": "모든 아군에게 방어막을 부여하고 해로운 효과를 해제합니다.",
        "areadata": [
			1,2,3,4,5,6,7,8,9
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "복원 시스템",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "라운드 개시 시, 전투 속행 효과가 적용됩니다. 해당 효과는 해제할 수 없습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "복원 대기",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "전투 속행 효과 발동 시, 4라운드 동안 행동 불가 상태가 되며 받는 피해가 최소화됩니다. 해당 효과는 해제할 수 없습니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "강화형 나이트 칙",
    "img": "NightChick",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 머신건 사격",
        "img": "ARShot",
        "range": 4,
        "description": "머신건 사격으로 <span id='askillpower1'></span> 피해를 줍니다. 2라운드 동안 대상의 회피를 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 머신건 연사",
        "img": "ARShot",
        "range": 1,
        "description": "머신건을 조준 사격해 <span id='askillpower2'></span> 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 정밀 조준",
        "img": "Snipe",
        "range": 0,
        "description": "대기 시, 3라운드 동안 적중 / 사거리 / 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "강화형 칙 런쳐",
    "img": "NightChickM",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 미사일 공격",
        "img": "Missile",
        "range": 2,
        "description": "미사일을 발사해 <span id='askillpower1'></span> 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 미사일 난사",
        "img": "Missile",
        "range": 1,
        "description": "미사일 근접 사격으로 <span id='askillpower2'></span> 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기동 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "이동 시, 4라운드 동안 사거리 / 공격력 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "나이트 칙 실더 개",
    "img": "NightChickSI",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "description": "방패로 강타해 <span id='askillpower1'></span> 피해를 줍니다. 대상이 회피 감소 상태면 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 가드 올리기",
        "img": "ShieldWall",
        "range": 6,
        "description": "3라운드 동안 같은 행의 뒤에 있는 아군을 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 방패",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "방패 장갑이 강화되어 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "강습형 스카우트",
    "img": "Scout",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 충격탄",
        "img": "Missile",
        "range": 2,
        "description": "충격 미사일을 발사해 <span id='askillpower1'></span> 피해를 주고 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 경보",
        "img": "Scan",
        "range": 6,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강습 대열",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "이동 시, 3라운드 동안 인접한 공격기의 공격을 지원하며 AP를 증가시킵니다.",
        "areadata": [
          2,
          8
        ]
      }
    ]
  },
  {
    "name": "헤비 스카우트",
    "img": "Scout_V2",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "대 장갑 기관포",
        "img": "AntiArmorShot",
        "range": 2,
        "description": "대 장갑 기관포를 발사해 <span id='askillpower1'></span> 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "공습 준비",
        "img": "SelfSpdBuff",
        "range": 6,
        "description": "3라운드 동안 회피 / 치명타 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "공격 포메이션",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "대기 시, 같은 열에 인접한 공격기의 AP / 치명타 / 사거리 / 방어 관통을 증가시킵니다.",
        "areadata": [
          2,
          5,
          8
        ]
      }
    ]
  },
  {
    "name": "지원형 스카우트",
    "img": "Scout",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격탄 투하",
        "img": "Missile",
        "range": 2,
        "description": "충격 미사일을 투하해 <span id='askillpower1'></span> 피해를 주고 대상의 AP를 감소시킵니다.",
        "areadata": [
          1,4,5,7
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "경보 발령",
        "img": "Scan",
        "range": 6,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP / 사거리 / 치명타를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기습 편제",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "이동 시, 인접한 아군의 공격을 지원합니다.",
        "areadata": [
          2,4,5,6,8
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "지원 대열",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "라운드 개시 시, 자신의 HP가 50% 이상인 경우 인접 아군의 공격력 / 방어력 / 효과 저항이 증가합니다. HP가 25% 미만인 경우, 인접 아군의 공격력 / 방어력 / 행동력이 감소합니다.",
        "areadata": [
          2,4,5,6,8
        ]
      }
    ]
  },
  {
    "name": "강화형 재퍼",
    "img": "Zapper",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전격 체인",
        "img": "Shock",
        "range": 3,
        "description": "전격을 방사해 <span id='askillpower1'></span> 전기 속성 피해를 주고 대상의 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "초고압 전류",
        "img": "Shock",
        "range": 1,
        "description": "고압 전류로 <span id='askillpower2'></span> 전기 속성 피해를 주고, 회피를 감소시킵니다. 일정 확률로 대상을 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "사주 경계",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "적을 발견하거나 적에게 공격당하기 전 까지는 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해가 대폭 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "아머드 하베스터",
    "img": "Harvester",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 파쇄",
        "img": "MeleeAttack",
        "range": 1,
        "description": "근접 공격으로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수집",
        "img": "Hang",
        "range": 4,
        "description": "집게로 목표 대상을 포획해 <span id='askillpower2'></span> 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "초합금 플레이팅",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "개량형 칙 캐논",
    "img": "NightChickC",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "네이팜 분사",
        "img": "WideFireShot",
        "range": 2,
        "description": "화염 방사로 <span id='askillpower1'></span> 화염 속성 피해를 주며, 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 곡사 포격",
        "img": "CannonShotDelay",
        "range": 6,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 <span id='askillpower2'></span>의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 파괴",
        "img": "SuiceideBomb",
        "range": 0,
        "description": "사망 시, 높은 확률로 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주며 피해 감소 효과를 해제합니다.",
        "areadata": [
          2,
          4,
          5,
          6,
          8
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "조준 보정",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "공격 시, 3라운드 동안 적중이 증가합니다.",
        "areadata": [
          2,
          4,
          5,
          6,
          8
        ]
      }
    ]
  },
  {
    "name": "정예 레기온",
    "img": "Legion",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "GAU 대공 미니건",
        "img": "ARShot",
        "range": 4,
        "description": "미니건을 발사해 <span id='askillpower1'></span> 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 점착탄",
        "img": "SlowShot",
        "range": 4,
        "description": "점착탄을 던져 <span id='askillpower2'></span> 피해를 주고, 일정 확률로 적중한 대상을 3라운드 동안 이동 불가 / 회피 / 행동력 감소 상태로 만듭니다. 각 효과는 해당 강화 상태를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 경보",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "아군이 처치되면 경계 태세로 전환해 양 옆의 아군의 행동력을 올려주며 대상의 공격을 지원합니다.",
        "areadata": [
          2,
          8
        ]
      }
    ]
  },
  {
    "name": "엘리트 레기온",
    "img": "Legion",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄 미니건",
        "img": "MGShot",
        "range": 5,
        "description": "미니건을 발사해 <span id='askillpower1'></span> 피해를 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가하며, 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "포획탄 발사",
        "img": "SelfSpdDeBuff",
        "range": 5,
        "description": "포획탄을 발사해 <span id='askillpower2'></span> 피해를 주고, 3라운드 동안 대상을 이동 불가 / 행동력 감소 / 회피 감소 상태로 만듭니다. 대상이 표식 상태면 일정 확률로 강화 효과를 해제합니다. 스킬 사용 시, 3라운드 동안 자신의 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "상황 대응",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "아군 중 HP가 25% 이하인 대상이 있는 경우, 대상의 행동력을 증가시키며 대상의 공격을 지원합니다.",
        "areadata": [
          1,2,3,4,6,7,8,9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "조준 공유 시스템",
        "img": "TeamAtkBuff",
        "range": 0,
        "description": "인접 아군의 적중이 증가합니다. 자신이 처치될 경우, 해당 효과를 받는 아군들의 적중 증가 효과를 해제하고 적중을 감소시킵니다.",
        "areadata": [
          2,4,6,8
        ]
      }
    ]
  },
  {
    "name": "엘리트 센츄리온",
    "img": "Centurion",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 로켓 런쳐",
        "img": "GrenadeAttack_2",
        "range": 4,
        "description": "유탄을 발사해 목표 대상들에게 <span id='askillpower1'></span> 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 표식",
        "img": "Scan",
        "range": 5,
        "description": "2라운드 동안 대상을 목표로 지정해 <span id='askillpower2'></span> 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "역습 태세",
        "img": "DefCounter",
        "range": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "부대 재 정비",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "라운드 개시 시 역습 태세인 경우, 인접한 아군들의 행동력과 적중을 증가시킵니다.",
        "areadata": [
          2,
          4,
          6,
          8
        ]
      }
    ]
  },
  {
    "name": "와습 HM",
    "img": "Wasp",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화염 작렬",
        "img": "WideFireShot",
        "range": 3,
        "description": "화염 방사로 대상에게 <span id='askillpower1'></span> 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 대상을 점화 상태로 만들어 2라운드 동안 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 돌진",
        "img": "SuiceideBomb",
        "range": 7,
        "description": "공격 대상에게 돌격 후, 자폭해 <span id='askillpower2'></span> 피해를 줍니다. 대상의 방어력을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고속 기동",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력 / 적중이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "스캐럽 HC",
    "img": "Scarab",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "실드 돌진",
        "img": "AssaultAttack",
        "range": 3,
        "description": "대상에게 돌격해 <span id='askillpower1'></span> 피해를 주고, 대상의 행 / 열 보호 효과와 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "호위 기동",
        "img": "SelfDefBuff",
        "range": 6,
        "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 행동력과 적중을 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 기동",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "라운드 개시 시 HP가 50% 이하인 경우, 받는 피해와 회피가 감소하고 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "스펙터 BS",
    "img": "Spector",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전자기장 미사일 난사",
        "img": "MultiMissile",
        "range": 4,
        "description": "전자기장 미사일을 난사해 <span id='askillpower1'></span> 피해를 주고, 대상의 치명타 / 효과 발동 / 사거리를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
        "areadata": [
          5,6,8,9
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 역장 전개",
        "img": "TeamDefBuff",
        "range": 6,
        "description": "반물질 역장을 넓게 전개해 주변 아군이 받는 피해를 일정 횟수 무효화하고, 자신과 주변 아군의 효과 저항을 올려줍니다.",
        "areadata": [
          1,2,3,4,6,7,8,9
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 반물질 역장",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "라운드 개시 시, 반물질 역장을 전개해 자신이 받는 피해를 일정 횟수 무효화하고, 받는 피해를 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전황 예측",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "스킬 사용 시, 주변 아군에게 적 분석 결과를 발신해 적중 / 회피 / AP를 올려줍니다.",
        "areadata": [
          1,2,3,4,6,7,8,9
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "강화 은폐장",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "전투 개시 시, 은폐장을 전개해 회피가 대폭 증가합니다. 해당 효과는 전투가 진행될수록 점감됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "스펙터 MS",
    "img": "Spector",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "교란용 전자기장 미사일",
        "img": "MultiMissile",
        "range": 4,
        "description": "전자기장 미사일로 대상들을 교란해 <span id='askillpower1'></span> 피해를 주고, 대상의 효과 저항 / 사거리를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
        "areadata": [
          1,4,5,7
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "모드 변경",
        "img": "TeamDefBuff",
        "range": 6,
        "description": "전투 모드로 전환해 공격력 / 치명타가 증가하지만 받는 피해도 증가하며, 행동력이 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "이동형 반물질 역장",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "라운드 개시 시, 반물질 역장을 전개해 자신과 인접 아군이 받는 피해를 일정 횟수 무효화합니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전투 패턴 분석",
        "img": "TeamSpdBuff",
        "range": 0,
        "description": "피격 시, 주변 아군에게 전투 패턴 분석 결과를 발신해 적중 / 치명타 / 효과 저항을 올려줍니다. 해당 효과는 3회까지 중첩됩니다.",
        "areadata": [
          1,2,3,4,6,7,8,9
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "은폐장 전개",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "전투 개시 시, 은폐장을 전개해 회피가 대폭 증가합니다. 해당 효과는 전투가 진행될수록 점감됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
  "name": "개량형 칙 쿼터마스터",
  "img": "NightChickQM",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "공격 훼방",
      "img": "Shot",
      "range": 4,
      "description": "대상에게 <span id='askillpower1'></span> 피해를 주며, 2라운드 동안 대상의 공격력 / 적중 / 치명타를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "전무장 보급",
      "img": "TeamAtkBuff",
      "range": 3,
      "description": "주변 아군의 출력을 강화해 공격력 / 적중 / 치명타를 높입니다. 자신은 행동력이 증가합니다. 해당 효과는 2회까지 중첩됩니다.",
      "areadata": [
        2,
        4,
        5,
        6,
        8
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "칙 약진하기",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 일정 확률로 무장 보급을 받은 아군의 공격을 지원하며, 피격 시 회피율이 증가합니다. 회피율 증가 효과는 최대 2회 중첩됩니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "전황 판단",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "라운드 개시 시, 배치된 열에 따라 아군 또는 자신에게 추가 효과가 부여됩니다. 전열에 배치된 경우 아군 전체의 방어력 / 모든 저항을 올려주고, 중열에 배치된 경우 자신의 행동력 / 방어력 / 피해 감소가 증가하며, 후열에 배치된 경우 아군 전체의 공격력 / 적중을 올려줍합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "배수진",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "사망 시, 모든 아군의 행동력이 감소하고, 받는 피해 / 공격력 / 적중이 증가합니다.",
      "areadata": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    }
  ]
},
{
  "name": "개량형 레기온 스나이퍼",
  "img": "LegionSP",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "점착탄 연사",
      "img": "TeamSpdDeBuff",
      "range": 4,
      "description": "점착탄을 연사해 <span id='askillpower1'></span> 피해를 주고, 대상들의 회피를 낮추며 회피 강화 효과를 해제합니다. 적중 대상은 행동력이 감소하며, 자신은 적중과 사거리가 증가합니다. 해당 효과는 2회까지 중첩됩니다.",
      "areadata": [
        2,
        5,
        8
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "정밀 선도 사격",
      "img": "Snipe",
      "range": 5,
      "description": "정밀 선도 사격으로 <span id='askillpower2'></span> 방어 관통 피해를 줍니다. 대상이 기동형인 경우, 피해랑이 크게 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "위장 홀로그램 투영",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "위장 홀로그램을 투영해, 적 진영과 멀수록 회피가 증가합니다. 해당 효과는 공격 시, 해당 라운드에는 일시적으로 해제됩니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "저격 대응",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "피격 시, 재빠르게 대응해 행동력이 증가하며 반격합니다. 행동력 증가 효과는 3회까지 중첩됩니다.",
      "areadata": [
        5
      ]
    }
  ]
},
  {
    "name": "시작형 빅 칙",
    "img": "BigChick",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포 발사",
        "img": "MGShot",
        "range": 4,
        "description": "중 기관총으로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관포",
        "img": "MGShot",
        "range": 1,
        "description": "중 기관총 근접 사격으로 방어력을 일정 비율 무시하는 <span id='askillpower2'></span> 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "근접 조준 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "적 진영에 가까울수록, 라운드 개시 시 적중이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "빅 칙 런쳐",
    "img": "BigChickM",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "고폭 미사일",
        "img": "CruiseMissile",
        "range": 5,
        "description": "1라운드 후 착탄하여 <span id='askillpower1'></span> 피해를 주는 미사일을 발사합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "마이크로 미사일",
        "img": "MultiMissile",
        "range": 1,
        "description": "지정 범위에 <span id='askillpower2'></span> 피해를 주는 마이크로 미사일을 발사합니다. 보호 효과를 무시하며 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다. 200%의 적중 보정이 적용됩니다.",
        "areadata": [
          1,
          4,
          5,
          7
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "유도 미사일",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "공격 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "FA 빅 칙 II",
    "img": "FABigChick",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 중 기관포",
        "img": "MGShot",
        "range": 4,
        "description": "중 기관포로 <span id='askillpower1'></span> 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논포",
        "img": "CannonShotWide",
        "range": 2,
        "description": "캐논포를 연사해 목표 열에 <span id='askillpower2'></span> 피해를 줍니다. 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          2,
          5,
          8
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "빅 칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "작열탄두",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "작열탄두를 장비해 경장형에게 주는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "빅 칙 실더",
    "img": "BigChickS",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 연타",
        "img": "ShieldWall",
        "range": 3,
        "description": "방패 연타로 대상에게 <span id='askillpower1'></span> 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가하며, 높은 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 블로킹",
        "img": "ShieldWall",
        "range": 6,
        "description": "방어 태세를 취해, 3라운드 동안 행 보호 / 열 보호 / 받는 피해 감소 / 효과 저항 증가 효과가 발생합니다. 자신의 HP가 25% 이하인 경우, 반격 효과가 추가됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 방어 지휘",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "<칙 블로킹> 상태로 라운드 개시 시, 주변 아군에게 방어력 증가 / 받는 피해 감소 효과를 줍니다.",
        "areadata": [
          2,3,6,8,9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "칙 근성 발동",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "피격 시, 2라운드 동안 방어력 / 행동력이 증가합니다. 라운드 개시 시, <칙 근성 발동> 방어 증가 효과가 5회 이상이면 전투 속행 효과가 추가됩니다. 전투 속행 발동 시, 2라운드 동안 최소 피해만 받지만 지속 고정 피해를 입으며 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
  "name": "나이트 칙 Type-S",
  "img": "NightChick_RV",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "S.C. 머신건",
      "img": "MGShot",
      "range": 5,
      "description": "머신건 사격으로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 회피 감소 상태면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "근접 난사",
      "img": "MGShot",
      "range": 1,
      "description": "머신건 근접 사격으로 <span id='askillpower2'></span> 피해를 줍니다. 대상이 방어 감소 상태면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "기동 준비",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "적을 공격하기 전까지는 행동력이 감소하며 받는 피해가 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "전투 적응 회로",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 공격력 / 명중 / 회피가 증가합니다. 해당 효과는 중첩됩니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "칙 기회 포착",
      "img": "DefCounter",
      "range": 0,
      "description": "회피 성공 시, 적의 빈틈을 노려 반격합니다.",
      "areadata": [
	      5
      ]
    }
  ]
},
{
  "name": "칙 엠퍼러",
  "img": "EmperorChick",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "칙 머신캐논",
      "img": "MGShot",
      "range": 4,
      "description": "대구경 기관포로 <span id='askillpower1'></span> 피해를 주고, 대상에게 무작위 방해 효과를 부여합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "칙 파이널 어택",
      "img": "WideBeamShot",
      "range": 3,
      "description": "전 무장을 발사해 목표 범위에 <span id='askillpower2'></span> 피해를 줍니다. 목표 중심점 밖일수록 피해가 감소하며, <광분> 상태면 피해량이 크게 증가합니다.",
      "areadata": [
        0.5,0.75,0.5,0.75,1,0.75,0.5,0.75,0.5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "전투 프로그램 설정",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 자신의 HP가 50% 이하면 전투 프로그램을 갱신해 자신과 주변 아군에게 무작위 강화 효과를 부여합니다. 낮은 확률로 치명적 오류가 발생해 행동 불가가 되거나 받는 피해 증가 효과가 발생합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "칙 철벽 방어술",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "공격한 후, 방어 태세를 취해 해당 라운드 동안에는 최소 피해만 받습니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "앵그리 칙",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "아군이 처치되면 3라운드 동안 공격력이 증가합니다. 라운드 개시 시, <앵그리 칙>이 3 중첩 이상이면 <광분> 상태가 되어 공격력 / 적중 / 치명타 / 행동력이 증가하며 피해 감소 효과를 무시합니다.",
      "areadata": [
	      5
      ]
    }
  ]
},
{
  "name": "까망베르",
  "img": "Undine",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "2연장 리볼버 캐논",
      "img": "MGShot",
      "range": 3,
      "description": "리볼버 캐논으로 단일 대상에게 <span id='askillpower1'></span> 피해를 주고, 대상을 도발하며 적중을 감소시킵니다. 대상이 방어력 감소 상태면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "F.F 미사일",
      "img": "Missile",
      "range": 4,
      "description": "날치 미사일로 <span id='askillpower2'></span> 피해를 줍니다. 대상의 받는 피해 감소 효과를 무시하며, 대상이 방어력 감소 상태이거나 경장형이면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "우향선회",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 같은 열의 아래에 배치된 아군들에게 공격 지원 / 지정 대상 보호 / 회피 증가 해제 효과를 부여합니다. 자신의 회피 증가 효과는 최대 2번까지 중첩됩니다.",
      "areadata": [
        2,5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "오만과 분노",
      "img": "TeamSpdDeBuff",
      "range": 0,
      "description": "공격 회피 시, 공격력 / 치명타 / 적중 / 행동력이 무작위로 증가합니다. 자신이 적 처치 시, 모든 아군의 회피 증가 효과를 해제하며 회피가 감소하고 받는 피해가 증가합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    }
  ]
},
{
  "name": "퐁 레베크",
  "img": "Undine",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "2연장 리볼버 캐논",
      "img": "MGShot",
      "range": 3,
      "description": "리볼버 캐논으로 단일 대상에게 <span id='askillpower1'></span> 피해를 주고, 대상을 방어력과 적중을 감소시킵니다. 대상이 도발 상태면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "F.F 미사일",
      "img": "Missile",
      "range": 4,
      "description": "날치 미사일로 <span id='askillpower2'></span> 피해를 줍니다. 대상의 방어력을 무시하며, 대상이 도발 상태 또는 중장형이면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "우향선회?",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 양 옆에 배치된 아군들에게 공격 지원 / 지정 대상 보호 / 회피 증가 해제 효과를 부여합니다. 자신의 회피 증가 효과는 최대 2번까지 중첩됩니다.",
      "areadata": [
        2,8
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "오만과 분노",
      "img": "TeamSpdDeBuff",
      "range": 0,
      "description": "공격 회피 시, 공격력 / 치명타 / 적중 / 행동력이 무작위로 증가합니다. 자신이 적 처치 시, 모든 아군의 회피 증가 효과를 해제하며 회피가 감소하고 받는 피해가 증가합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    }
  ]
},
{
  "name": "브리 드 모",
  "img": "Undine",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "2연장 리볼버 캐논",
      "img": "MGShot",
      "range": 3,
      "description": "리볼버 캐논으로 단일 대상에게 <span id='askillpower1'></span> 피해를 주고, 대상을 회피와 적중을 감소시킵니다. 대상이 도발 상태면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "F.F 미사일",
      "img": "Missile",
      "range": 4,
      "description": "날치 미사일로 <span id='askillpower2'></span> 피해를 줍니다. 대상의 회피 강화 효과를 해제하며, 대상이 도발 상태 또는 기동형이면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "우향선회???",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 같은 열 위에 배치된 아군들에게 공격 지원 / 지정 대상 보호 / 회피 증가 해제 효과를 부여합니다. 자신의 회피 증가 효과는 최대 2번까지 중첩됩니다.",
      "areadata": [
        5,8
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "오만과 분노",
      "img": "TeamSpdDeBuff",
      "range": 0,
      "description": "공격 회피 시, 공격력 / 치명타 / 적중 / 행동력이 무작위로 증가합니다. 자신이 적 처치 시, 모든 아군의 회피 증가 효과를 해제하며 회피가 감소하고 받는 피해가 증가합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    }
  ]
},
{
  "name": "슈퍼 네리다!",
  "img": "Nereid",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "벌집 만들기",
      "img": "MGShot",
      "range": 4,
      "description": "미니건을 발사해 <span id='askillpower1'></span> 피해를 줍니다. 대상을 표식으로 설정하고 받는 피해를 증가시킵니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "무차별 난사",
      "img": "MGWideShot",
      "range": 4,
      "description": "미니건을 난사해 대상에게 <span id='askillpower2'></span> 보호 무시 피해를 줍니다. 대상의 강화 효과를 해제하며, 치명타 시 피해량이 증가합니다.",
      "areadata": [
        1,4,5,7
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "덤벼덤벼!",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "자신의 남은 HP 비율이 적을수록 적에게 주는 피해가 증가하며, 받는 피해가 감소합니다. 효과 저항이 증가하며, HP 10% 이하 상태로 피격 시 반격합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "전투 과몰입",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "전투 불능이 될 경우, HP를 회복하고 전투를 속행합니다. 전투 속행 효과 발동 시, 공격력 / 적중 / 치명타 / 행동력이 증가하며 방어막과 피해 감소 효과를 무시합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "네리와 부하들",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "적 공격 시, 부하들에게 명령을 내려 공격력 / 적중 / AP를 증가시킵니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    }
  ]
},
{
  "name": "네리의 부하",
  "img": "AMG11AA",
  "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "공격 개시",
        "img": "ARShot",
        "range": 5,
        "description": "기총 사격으로 <span id='askillpower1'></span> 피해를 줍니다. 대상이 표식 상태면 피해량이 증가하고, 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대공 기총 난사",
        "img": "WideBeamShot",
        "range": 1,
        "description": "기총을 난사해 <span id='askillpower2'></span> 피해를 줍니다. 대상이 회피 감소 상태면 피해량이 증가하며, 강화 효과를 해제합니다.",
        "areadata": [
          1,4,5,7
        ]
      },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "대공 레이더 시스템",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 인접 아군에게 적중 / 치명타 / 대 기동형 피해량 증가 효과를 부여합니다.",
      "areadata": [
        1,2,3,4,6,7,8,9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "시스템 과부하",
      "img": "SelfAtkDeBuff",
      "range": 0,
      "description": "파괴되면 주변 아군에게 걸려있는 강화 효과를 해제합니다. 슈퍼 네리(?)의 재촉으로 인한 공격력 증가 효과가 3 중첩 이상일 경우, 라운드 개시 시 방어막 / 피해 감소 무시 효과가 부여됩니다.",
      "areadata": [
        2,4,5,6,8
      ]
    }
    ]
},
{
  "name": "다곤씨 (대여 중)",
  "img": "GigantesD",
  "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "심해의 분노",
        "img": "MeleeAttack",
        "range": 1,
        "description": "대상을 강타해 <span id='askillpower1'></span> 보호 무시 피해를 줍니다. 대상의 방어력 / 방어막 / 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "타이달 어썰트",
        "img": "AssaultAttack",
        "range": 2,
        "description": "대상에게 돌격해 <span id='askillpower2'></span> 피해를 줍니다. 대상이 표식 상태면 강화 효과를 해제하고 행동 불가 상태로 만든 후, 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "심해의 거신",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "전투 개시 시 방어력 / 냉기 / 효과 저항이 크게 증가하며, 5라운드 동안 행 보호 / 받는 피해 감소 효과가 적용됩니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "보호 전환",
      "img": "TeamDefBuff",
      "range": 0,
      "description": "공격 시, 2라운드 동안 범위 내에 있는 아군에게 지정 대상 보호 효과를 부여합니다.",
      "areadata": [
        2,3,8,9
      ]
    }
    ]
},
{
  "name": "문제아반 반장",
  "img": "Sirene",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "57mm 대공포",
      "img": "MGShot",
      "range": 5,
      "description": "대공포를 발사해 <span id='askillpower1'></span> 피해를 주고, 대상을 표식으로 설정해 받는 피해를 증가시키고 회피를 감소시킵니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "포격 지휘",
      "img": "TeamAtkBuff",
      "range": 4,
      "description": "범위 내 아군의 AP / 행동력 / 효과 저항을 증가시키고, 대상에게 걸려있는 해로운 효과를 해제합니다. 추가로, 대상들의 공격을 지원합니다.",
      "areadata": [
        1,2,3,4,5,6,7,8,9
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "협차 사격",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "공격 시, 범위 내 아군들의 적중 / 치명타 / 방어 관통을 증가시킵니다.",
      "areadata": [
        1,2,3,4,6,7,8,9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "요격 모드",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "전투 개시 시, AP가 증가하며 받는 피해가 감소합니다. 아군이 처치될 경우, AP가 크게 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "관측 포격",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 공격 지원을 받는 상태면 적중 / 치명타가 증가합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "그럼요~",
  "img": "SireneCannon",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "203mm 연장포",
      "img": "CannonShot",
      "range": 5,
      "description": "직사 포격으로 지정 범위에 <span id='askillpower1'></span> 피해를 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가합니다.",
      "areadata": [
        5,8
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "초토화 포격",
      "img": "TeamAtkBuff",
      "range": 4,
      "description": "포격 연사로 지정 범위에 <span id='askillpower1'></span> 보호 무시 피해를 줍니다. 목표 지점 주변은 피해량이 25% 감소하며, 대상이 경장 / 중장형이면 피해량 증가하며 1칸 뒤로 밉니다. 스킬 사용 시, 2라운드 동안 행동 불가가 됩니다.",
      "areadata": [
        0.75,0.75,0.75,0.75,1,0.75,0.75,0.75,0.75
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "협차 사격",
      "img": "TeamAtkBuff",
      "range": 0,
      "description": "공격 시, 범위 내 아군들의 적중 / 치명타 / 방어 관통을 증가시킵니다.",
      "areadata": [
        1,2,3,4,6,7,8,9
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "포격 모드",
      "img": "SelfSpdBuff",
      "range": 0,
      "description": "라운드 개시 시, 공격력 / 방어 관통이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill3",
      "type": "passive",
      "name": "관측 포격",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "라운드 개시 시, 공격 지원을 받는 상태면 적중 / 치명타가 증가하며, 방어막 / 피해 감소 효과를 무시합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
{
  "name": "그럼⋯요?",
  "img": "Undine",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "2연장 리볼버 캐논",
      "img": "MGShot",
      "range": 3,
      "description": "리볼버 캐논으로 단일 대상에게 <span id='askillpower1'></span> 피해를 주고, 대상을 도발하며 공격력 / 치명타를 감소시킵니다. 대상이 표식 상태면 피해량이 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "F.F 미사일",
      "img": "Missile",
      "range": 4,
      "description": "날치 미사일로 <span id='askillpower2'></span> 방어 관통 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "우향선회?!",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 같은 열에 인접한 보호기 제외 아군을 보호하며, 대상에게 공격 지원 / 적중 / 치명타 증가 효과를 부여합니다. 회피 증가 효과는 3회까지 중첩됩니다.",
      "areadata": [
        2,5,8
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "오만과 분노",
      "img": "TeamSpdDeBuff",
      "range": 0,
      "description": "회피 시, 반격하며 회피 증가 효과가 해제됩니다. 회피 시, 주변에 있는 아군을 도발해 공격력 / 치명타를 증가시키지만 적중 감소 / 지정 보호 해제 / 받는 피해 증가 효과를 부여합니다.",
      "areadata": [
        1,2,3,4,6,7,8,9
      ]
    }
  ]
},
{
  "name": "그럼~요!",
  "img": "Nereid",
  "skills": [
    {
      "title": "askill1",
      "type": "active",
      "name": "벌집 만들기",
      "img": "MGShot",
      "range": 4,
      "description": "미니건을 발사해 <span id='askillpower1'></span> 피해를 줍니다. 대상이 표식 상태인 경우, 피해량이 크게 증가합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "askill2",
      "type": "active",
      "name": "무차별 난사",
      "img": "MGWideShot",
      "range": 3,
      "description": "미니건을 난사해 대상에게 <span id='askillpower2'></span> 피해를 줍니다. 목표 대상들의 적중 / 회피 / 행동력을 감소시킵니다.",
      "areadata": [
        1,4,5,7
      ]
    },
    {
      "title": "pskill1",
      "type": "passive",
      "name": "덤벼덤벼!",
      "img": "SelfAtkBuff",
      "range": 0,
      "description": "자신의 남은 HP 비율이 적을수록 적에게 주는 피해가 증가하며, 받는 피해가 감소합니다.",
      "areadata": [
        5
      ]
    },
    {
      "title": "pskill2",
      "type": "passive",
      "name": "전투 과몰입",
      "img": "SelfDefBuff",
      "range": 0,
      "description": "전투 불능이 될 경우, 1회에 한해 HP를 회복하고 전투를 속행합니다. 전투 속행 효과 발동 시, 해당 전투 동안 피해 감소 효과를 무시하며 공격력이 증가합니다.",
      "areadata": [
        5
      ]
    }
  ]
},
  {
    "name": "케미컬 칙 Type-X",
    "img": "NightChickCMP",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "급속 부식탄",
        "img": "Missile",
        "range": 5,
        "description": "급속 부식탄을 발사해 <span id='askillpower1'></span> 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "급속 부식탄 난사",
        "img": "MultiMissile",
        "range": 4,
        "description": "급속 부식탄을 발사해 지정 범위에 <span id='askillpower2'></span> 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다.",
        "areadata": [
          2,
          5,
          8
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "부식액 누출",
        "img": "TeamDefDeBuff",
        "range": 0,
        "description": "적 공격 시, 주변에 부식액이 누출되어 지속 고정 피해를 주며 방어력을 감소시킵니다.",
        "areadata": [
          1,2,3,4,6,7,8,9
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "내성 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "공격 당할 경우, 상대의 스킬이 최소 피해로 적용됩니다. 라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제하고 효과 저항을 높입니다.",
        "areadata": [
          1,3,5,7,9
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "부식액 폭발",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "화염 속성 액티브 스킬 공격 피격 시, 부식액에 불이 붙어 점화 상태가 됩니다. 점화 상태로 처치되면 부식액 폭발로 범위 내 아군에게 괴멸적인 고정 피해를 입힙니다.",
        "areadata": [
          1,2,3,4,5,6,7,8,9
        ]
      }
    ]
  },
  {
    "name": "빅 칙 런쳐 G",
    "img": "BigChickMG",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄 미사일",
        "img": "CruiseMissile",
        "range": 6,
        "description": "1라운드 후 착탄하며, <span id='askillpower1'></span> 보호 무시 피해를 주는 미사일을 발사합니다. 대상이 경장형 또는 중장형인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "집속 마이크로 미사일",
        "img": "MultiMissile",
        "range": 4,
        "description": "지정 범위에 <span id='askillpower2'></span> 보호 무시 피해를 주는 집속 마이크로 미사일을 발사합니다. 3라운드 동안 공격 대상들의 회피를 감소시킵니다. 200%의 추가 적중 보정이 적용됩니다.",
        "areadata": [
          2,4,5,6,8
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고속 장전 장치",
        "img": "SelfSpdBuff",
        "range": 0,
        "description": "공격 후, 3라운드 동안 행동력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "MOP 탄두",
        "img": "SelfAtkBuff",
        "range": 0,
        "description": "방어 관통이 크게 증가하며, 공격 대상의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "레이더 오류",
        "img": "SelfAtkDeBuff",
        "range": 0,
        "description": "전기 속성 피격 시, 2라운드 동안 적중이 대폭 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "name": "강화형 저거너트",
    "img": "Juggernaut",
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스매셔 펀치",
        "img": "MeleeAttack",
        "range": 1,
        "description": "대상을 강타해 <span id='askillpower1'></span> 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "방벽 무너뜨리기",
        "img": "AssaultAttack",
        "range": 2,
        "description": "대상에게 돌진해 <span id='askillpower2'></span> 피해를 주고, 피해 감소 효과를 해제하며 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "호위 경보",
        "img": "TeamDefBuff",
        "range": 0,
        "description": "아군이 사망한 경우, 방어 태세로 전환해 행 보호와 열 보호 효과를 활성화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "고밀도 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "description": "라운드 개시 시, 방어력이 증가합니다. HP 25% 이하가 될 경우, 방어력이 추가로 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  }
];
