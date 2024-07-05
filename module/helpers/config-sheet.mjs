export const configSheet = async () => {

    // pass Night Witches sheet object to sheeConfig

    game.pbta.sheetConfig = {
        rollFormula: "2d6",
        rollResults: {
            failure: {
                start: null,
                end: 6,
                label: "Miss"
            },
            partial: {
                start: 7,
                end: 9,
                label: "Partial Hit"
            },
            success: {
                start: 10,
                end: 12,
                label: "Full Hit!"
            }
        },
        actorTypes: {
            character: {
                stats: {
                    skill: {
                        label: "Skill",
                        value: 0
                    },
                    guts: {
                        label: "Guts",
                        value: 0
                    },
                    luck: {
                        label: "Luck",
                        value: 0
                    },
                    medals: {
                        label: "Medals",
                        value: 0
                    },
                },
                attrLeft: {
                    look: {
                        label: "Look",
                        type: "LongText",
                    },
                    regard: {
                        label: "Regard",
                        type: "LongText",
                    },
                    harm: {
                        type: "ListMany",
                        label: "Harm",
                        options: {
                            0: {
                                label: "1-Harm: Stressed.",
                                value: false
                            },
                            1: {
                                label: "2-Harm: Lightly injured.",
                                value: false
                            },
                            2: {
                                label: "3-Harm: Seriously Injured.",
                                value: false
                            },
                            3: {
                                label: "4-Harm: Death.",
                                value: false
                            }
                        }
                    },
                    advancement: {
                        type: "ListMany",
                        label: "Advancement",
                        options: {
                            0: {
                                label: "HARSH LESSONS|3",
                                value: false
                            },
                            2: {
                                label: "DEEPENING TIES|4",
                                value: false
                            },
                            3: {
                                label: "PERSONAL GROWTH|3",
                                value: false
                            },
                            4: {
                                label: "HONOR AND PRIDE|4",
                                value: false
                            },
                            5: {
                                label: "ADDED RESPONSIBILITY|3",
                                value: false
                            },
                            6: {
                                label: "MOVING WEST|1",
                                value: false
                            }
                        },
                    },
                },
                moveTypes: {
                    playbookMoves: {
                        label: "Moves",
                        moves: []
                    },
                    roleMoves: {
                        label: "Role",
                        moves: []
                    },
                    dayMoves: {
                        label: "Day",
                        moves: []
                    },
                    nightMoves: {
                        label: "Night",
                        moves: []
                    }
                },
                equipmentTypes: {
                    gear: {
                        label: "Gear",
                    },
                    contraband: {
                        label: "Contraband",
                    }
                }
            },
            npc: {
                attrLeft: {
                    nkvd_notes: {
                        label: "NKVD Notes",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        value: ""
                    },
                    description: {
                        label: "Description",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        value: ""
                    }
                },
                moveTypes: {
                    mc: {
                        label: "MC Moves",
                        moves: []
                    }
                },
                equipmentTypes: {
                    gear: {
                        label: "Gear",
                    },
                    contraband: {
                        label: "Contraband",
                    }
                }
            }
        }
    }

    // check if users wants to override settings; if not, hide all PbtA sheet options
    let overrideSettings = await game.settings.get('night-witches-pbta-foundryvtt', 'settings-override');

    if (!overrideSettings) {
        await game.settings.set('pbta', 'advForward', true);
        await game.settings.set('pbta', 'hideRollFormula', true);
        await game.settings.set('pbta', 'hideForward', true);
        await game.settings.set('pbta', 'hideOngoing', true);
        await game.settings.set('pbta', 'hideRollMode', true);
        await game.settings.set('pbta', 'hideUses', true);
    }

}