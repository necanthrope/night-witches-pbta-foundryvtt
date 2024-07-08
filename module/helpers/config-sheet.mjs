export const configSheet = async () => {

    // pass Night Witches sheet object to sheetConfig
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
                attributes: {
                    look: {
                        position: "Left",
                        label: "Look",
                        type: "LongText",
                        playbook: true,
                    },
                    regard: {
                        position: "Left",
                        label: "Regard",
                        type: "LongText",
                    },
                    harm: {
                        position: "Left",
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
                        position: "Left",
                        label: "Advancement",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                values: {
                                    0: {
                                        value: false
                                    },
                                    1: {
                                        value: false
                                    },
                                    2: {
                                        value: false
                                    }
                                },
                                label: "HARSH LESSONS"
                            },
                            1: {
                                values: {
                                    0: {
                                        value: false
                                    },
                                    1: {
                                        value: false
                                    },
                                    2: {
                                        value: false
                                    },
                                    3: {
                                        value: false
                                    }
                                },
                                label: "DEEPENING TIES"
                            },
                            2: {
                                values: {
                                    0: {
                                        value: false
                                    },
                                    1: {
                                        value: false
                                    },
                                    2: {
                                        value: false
                                    }
                                },
                                label: "PERSONAL GROWTH"
                            },
                            3: {
                                values: {
                                    0: {
                                        value: false
                                    },
                                    1: {
                                        value: false
                                    },
                                    2: {
                                        value: false
                                    },
                                    3: {
                                        value: false
                                    }
                                },
                                label: "HONOR AND PRIDE"
                            },
                            4: {
                                values: {
                                    0: {
                                        value: false
                                    },
                                    1: {
                                        value: false
                                    },
                                    2: {
                                        value: false
                                    }
                                },
                                label: "ADDED RESPONSIBILITY"
                            },
                            5: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "MOVING WEST"
                            }
                        }
                    },
                    hawkMarks: {
                        position: "Left",
                        label: "Marks",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: "hawk",
                        limited: false,
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "SUFFER THE DEATH OF A FRIEND OR LOVER."
                            },
                            1: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "WITNESS THE DEATH OF A COMRADE."
                            },
                            2: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "GIVE YOUR AIRCRAFT A PERSONALITY."
                            },
                            3: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "MAKE A FRIEND OR TAKE A LOVER."
                            },
                            4: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A SELF-AGGRANDIZING LIE."
                            },
                            5: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "SHARE A PAINFUL TRUTH ABOUT A YOURSELF."
                            },
                            6: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "ACQUIRE A DREAD OR SUPERSTITION."
                            },
                            7: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "PUT DUTY BEFORE HEALTH OR LOVE."
                            },
                            8: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "ADVANCE AND GROW."
                            },
                            9: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A WAR STORY."
                            },
                            10: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A STORY OF HOME.",
                            },
                            11: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "EMBRACE DEATH AND FACE YOUR FINAL DESTINY.",
                            }
                        },
                    },
                    owlMarks: {
                        position: "Left",
                        label: "Marks",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: "owl",
                        limited: false,
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "SUFFER THE DEATH OF A FRIEND OR LOVER."
                            },
                            1: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "WITNESS THE DEATH OF A COMRADE."
                            },
                            2: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "SHARE A PREMONITION."
                            },
                            3: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "MAKE A FRIEND OR TAKE A LOVER."
                            },
                            4: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "INFORM THE AUTHORITIES."
                            },
                            5: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "PUBLICLY SHAME A COMRADE."
                            },
                            6: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "EARN A MEDAL YOU DON'T DESERVE."
                            },
                            7: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "PUT SAFETY BEFORE LOVE OR DUTY."
                            },
                            8: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "ADVANCE AND GROW."
                            },
                            9: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A WAR STORY."
                            },
                            10: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A STORY OF HOME.",
                            },
                            11: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "EMBRACE DEATH AND FACE YOUR FINAL DESTINY.",
                            }
                        },
                    },
                    pigeonMarks: {
                        position: "Left",
                        label: "Marks",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: "pigeon",
                        limited: false,
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "SUFFER THE DEATH OF A FRIEND OR LOVER."
                            },
                            1: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "WITNESS THE DEATH OF A COMRADE."
                            },
                            2: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "GIVE YOUR AIRCRAFT A PERSONALITY."
                            },
                            3: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "MAKE A FRIEND OR TAKE A LOVER."
                            },
                            4: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "COMFORT A DYING FRIEND."
                            },
                            5: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "BETRAY A FRIEND OR LOVER."
                            },
                            6: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "DISGRACE YOURSELF OR YOUR UNIFORM."
                            },
                            7: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "IGNORE A PROBLEM UNTIL IT OVERWHELMS."
                            },
                            8: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "ADVANCE AND GROW."
                            },
                            9: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A WAR STORY."
                            },
                            10: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A STORY OF HOME.",
                            },
                            11: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "EMBRACE DEATH AND FACE YOUR FINAL DESTINY.",
                            }
                        },
                    },
                    ravenMarks: {
                        position: "Left",
                        label: "Marks",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: "raven",
                        limited: false,
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "SUFFER THE DEATH OF A FRIEND OR LOVER."
                            },
                            1: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "WITNESS THE DEATH OF A COMRADE."
                            },
                            2: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "SHARE A PREMONITION."
                            },
                            3: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL THE UNVARNISHED TRUTH."
                            },
                            4: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "CLAIM SOMETHING AS YOUR OWN."
                            },
                            5: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "IGNORE A PROBLEM UNTIL IT OVERWHELMS."
                            },
                            6: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "CHANGE POSTS FOR THE WRONG REASONS."
                            },
                            7: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "ACT AGAINST YOUR BEST INTERESTS."
                            },
                            8: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "ADVANCE AND GROW."
                            },
                            9: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A WAR STORY."
                            },
                            10: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A STORY OF HOME.",
                            },
                            11: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "EMBRACE DEATH AND FACE YOUR FINAL DESTINY.",
                            }
                        },
                    },
                    sparrowMarks: {
                        position: "Left",
                        label: "Marks",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: "sparrow",
                        limited: false,
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "SUFFER THE DEATH OF A FRIEND OR LOVER."
                            },
                            1: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "WITNESS THE DEATH OF A COMRADE."
                            },
                            2: {
                                values: {
                                    0: {
                                        value: false
                                    }
                                },
                                label: "SHARE A PREMONITION."
                            },
                            3: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "CALL DANGEROUS ATTENTION TO YOURSELF."
                            },
                            4: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "SPEAK TRUTH TO POWER."
                            },
                            5: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "SPREAD A VICIOUS RUMOR."
                            },
                            6: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "REVEAL A SECRET."
                            },
                            7: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "ACT AGAINST YOUR BEST INTERESTS."
                            },
                            8: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "ADVANCE AND GROW."
                            },
                            9: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A WAR STORY."
                            },
                            10: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "TELL A STORY OF HOME.",
                            },
                            11: {
                                values: {
                                    0:
                                        {
                                            value: false
                                        }
                                },
                                label: "EMBRACE DEATH AND FACE YOUR FINAL DESTINY.",
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
                        label: "Day Moves",
                        creation: true
                    },
                    nightMoves: {
                        label: "Night Moves",
                        creation: true
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
                attributes: {
                    nkvd_notes: {
                        position: "Left",
                        label: "NKVD Notes",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        value: ""
                    },
                    description: {
                        position: "Left",
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