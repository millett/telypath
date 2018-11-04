export default (
  state = {
    isDark: false,
    patientInfos: [
      {
        "id": "square-watch-modern-draw-stranger-things",
        "status": "CaseStatus.New",
        "source": "UPMC",
        "tissue_location": "Prostate",
        "diagnosis": null
      },
      {
        "id": "influence-scent-mark-copper-general-diamond",
        "status": "CaseStatus.InProgress",
        "source": "SUMC",
        "tissue_location": "Breast",
        "diagnosis": null
      },
      {
        "id": "daylight-horizon-confident-sharpen-lead-stove",
        "status": "CaseStatus.SignedOut",
        "source": "BCH",
        "tissue_location": "Breast",
        "diagnosis": null
      }
    ]
  }, action) => {
    console.log('actin called')
    console.log(action.type)
 switch (action.type) {
  case 'SET_THEME_DARK':
    return {
      ...state,
      isDark: true,
    };
  case 'SET_THEME_LIGHT':
    return {
      ...state,
      isDark: false,
    };
  case 'SET_PATIENT_DIAGNOSIS':
    const newPatientInfos = {
      ...state.patientInfos
    };
    newPatientInfos[action.payload.patientId] = action.payload.diagnosis;
    return {
      ...state,
      patientInfos: {
        ...newPatientInfos,
      }
    }
  default:
   return state
 }
}
